/* ============================================================
   CHAKRABORTY ACADEMIC WEBSITE — Site JS
   ============================================================ */
'use strict';

/* ---------- Sidebar & Mobile Nav ---------- */
function initNav() {
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('overlay');
  const openBtn  = document.getElementById('menu-open');
  const closeBtn = document.getElementById('sidebar-close');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBtn)  openBtn.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (overlay)  overlay.addEventListener('click', closeSidebar);

  // Close on nav link click (mobile)
  sidebar.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) closeSidebar();
    });
  });

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  sidebar.querySelectorAll('.nav-link[href]').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ---------- Theme Toggle ---------- */
function initTheme() {
  const btn   = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('sc-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeBtn(btn, saved);

  if (btn) {
    btn.addEventListener('click', () => {
      const cur  = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('sc-theme', next);
      updateThemeBtn(btn, next);
    });
  }
}

function updateThemeBtn(btn, theme) {
  if (!btn) return;
  btn.innerHTML = theme === 'dark'
    ? '☀ Light mode'
    : '☾ Dark mode';
}

/* ---------- Scroll-reveal animations ---------- */
function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    obs.observe(el);
  });
}

/* ---------- Publication Filter ---------- */
function initPubFilter() {
  const filterBtns = document.querySelectorAll('[data-pub-filter]');
  const pubItems   = document.querySelectorAll('[data-pub-cat]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-pub-filter');
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      pubItems.forEach(item => {
        const cat = item.getAttribute('data-pub-cat');
        item.style.display = (filter === 'all' || cat.includes(filter)) ? '' : 'none';
      });
    });
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initTheme();
  initReveal();
  initPubFilter();

  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
