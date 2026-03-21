# Makefile — chakraborty.website
# ─────────────────────────────────────────────────────────────
#  make serve [PORT=8080]   start local dev server (background)
#  make stop  [PORT=8080]   stop local dev server
#  make sync  [MSG="..."]   stage → commit → push to GitHub Pages
#  make help                show this message
# ─────────────────────────────────────────────────────────────

.DEFAULT_GOAL := help
.ONESHELL:
SHELL         := /bin/bash
.SHELLFLAGS   := -c

SITE_DIR := $(shell pwd)
PORT     ?= 8080
PIDFILE  := $(SITE_DIR)/.server.pid
MSG      ?=

.PHONY: serve stop sync help

# symbols
TICK := ✔
CROSS := ✘

# ── help ──────────────────────────────────────────────────────
help:
	@echo ""
	echo "  chakraborty.website — available targets"
	echo ""
	echo "  make serve [PORT=8080]   start local dev server (background)"
	echo "  make stop  [PORT=8080]   stop local dev server"
	echo "  make sync  [MSG=\"...\"]   stage, commit, push to GitHub Pages"
	echo ""

# ── serve ─────────────────────────────────────────────────────
serve:
	@if [ -f "$(PIDFILE)" ]; then
	  OLD_PID=$$(cat "$(PIDFILE)")
	  if kill -0 "$$OLD_PID" 2>/dev/null; then
	    echo "  $(CROSS) Stopping existing server (PID $$OLD_PID)..."
	    kill "$$OLD_PID" 2>/dev/null
	    sleep 0.5
	  fi
	  rm -f "$(PIDFILE)"
	fi
	fuser -k $(PORT)/tcp 2>/dev/null || true
	echo ""
	echo "  ╔══════════════════════════════════════════╗"
	echo "  ║   chakraborty.website local server       ║"
	echo "  ║   http://localhost:$(PORT)                   ║"
	echo "  ║   run 'make stop' to stop                ║"
	echo "  ╚══════════════════════════════════════════╝"
	echo ""
	cd "$(SITE_DIR)"
	if command -v python3 >/dev/null 2>&1; then
	  python3 -m http.server $(PORT) &
	elif command -v python >/dev/null 2>&1; then
	  python -m SimpleHTTPServer $(PORT) &
	elif command -v node >/dev/null 2>&1; then
	  npx serve -p $(PORT) . &
	else
	  echo "  $(CROSS) No suitable server found. Install Python 3 or Node.js." ; exit 1
	fi
	echo $$! > "$(PIDFILE)"
	echo "  $(TICK) Server PID: $$(cat "$(PIDFILE)")"
	echo ""

# ── stop ──────────────────────────────────────────────────────
stop:
	@if [ -f "$(PIDFILE)" ]; then
	  OLD_PID=$$(cat "$(PIDFILE)")
	  if kill -0 "$$OLD_PID" 2>/dev/null; then
	    echo "  $(CROSS) Stopping server (PID $$OLD_PID)..."
	    kill "$$OLD_PID" 2>/dev/null
	    sleep 0.5
	  fi
	  rm -f "$(PIDFILE)"
	  echo "  $(TICK) Server stopped."
	else
	  echo "  $(CROSS) No server PID file found."
	fi
	fuser -k $(PORT)/tcp 2>/dev/null || true

# ── sync ──────────────────────────────────────────────────────
sync:
	@set -e
	cd "$(SITE_DIR)"
	if git diff --quiet && git diff --cached --quiet && [ -z "$$(git ls-files --others --exclude-standard)" ]; then
	  echo "  $(TICK) Nothing to sync — working tree is clean."
	  exit 0
	fi
	echo "  $(TICK) Staging all changes..."
	git add -A
	if [ -n "$(MSG)" ]; then
	  COMMIT_MSG="$(MSG)"
	else
	  CHANGED=$$(git diff --cached --name-only | head -6 | tr '\n' ',' | sed 's/,$$//')
	  COUNT=$$(git diff --cached --name-only | wc -l | tr -d ' ')
	  COMMIT_MSG="Update website: $$COUNT file(s) changed — $$CHANGED"
	fi
	git commit -m "$$COMMIT_MSG"
	echo "  $(TICK) Committed: $$COMMIT_MSG"
	echo ""
	echo "  $(TICK) Pushing to GitHub Pages (master)..."
	git push origin main:master
	echo ""
	echo "  $(TICK) Done! Site live at https://shibaji7.github.io in ~60 seconds."
	echo "  $(TICK) $$(git log --oneline -1)"
