/* =========================================
   CHAKRABORTY.WEBSITE — Main JavaScript
   ========================================= */

'use strict';

/* ---------- Starfield Canvas ---------- */
function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  let animFrame;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.8 + 0.2,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
        alphaSpeed: Math.random() * 0.003 + 0.001,
        color: Math.random() > 0.85 ? '#7c4dff' : Math.random() > 0.7 ? '#4fc3f7' : '#ffffff'
      });
    }
  }

  // Shooting stars
  let shootingStars = [];
  function createShootingStar() {
    if (Math.random() > 0.995) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.5;
      shootingStars.push({
        x, y,
        length: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 6,
        angle: Math.random() * 0.4 + 0.3,
        alpha: 1,
        life: 0,
        maxLife: 60
      });
    }
  }

  function drawShootingStars() {
    shootingStars = shootingStars.filter(s => s.life < s.maxLife);
    shootingStars.forEach(s => {
      s.life++;
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.alpha = 1 - s.life / s.maxLife;

      const grad = ctx.createLinearGradient(
        s.x, s.y,
        s.x - Math.cos(s.angle) * s.length,
        s.y - Math.sin(s.angle) * s.length
      );
      grad.addColorStop(0, `rgba(79, 195, 247, ${s.alpha})`);
      grad.addColorStop(1, 'rgba(79, 195, 247, 0)');

      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length);
      ctx.stroke();
    });
  }

  // Nebula blobs
  function drawNebula() {
    const positions = [
      { x: canvas.width * 0.15, y: canvas.height * 0.3, r: 200, color: 'rgba(124, 77, 255, 0.04)' },
      { x: canvas.width * 0.8, y: canvas.height * 0.6, r: 250, color: 'rgba(79, 195, 247, 0.03)' },
      { x: canvas.width * 0.5, y: canvas.height * 0.8, r: 180, color: 'rgba(0, 229, 255, 0.025)' },
    ];
    positions.forEach(p => {
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      grad.addColorStop(0, p.color);
      grad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawNebula();

    stars.forEach(s => {
      s.x += s.vx;
      s.y += s.vy;
      s.alpha += s.alphaDir * s.alphaSpeed;
      if (s.alpha >= 1 || s.alpha <= 0.1) s.alphaDir *= -1;
      if (s.x < 0) s.x = canvas.width;
      if (s.x > canvas.width) s.x = 0;
      if (s.y < 0) s.y = canvas.height;
      if (s.y > canvas.height) s.y = 0;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.color.replace(')', `, ${s.alpha})`).replace('rgb', 'rgba').replace('#ffffff', `rgba(255,255,255,${s.alpha})`);

      if (s.color !== '#ffffff') {
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
      } else {
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = '#ffffff';
      }
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    createShootingStar();
    drawShootingStars();
    animFrame = requestAnimationFrame(draw);
  }

  resize();
  createStars(220);
  draw();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animFrame);
    resize();
    createStars(220);
    draw();
  });
}

/* ---------- Typed Text Effect ---------- */
function initTypedText() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const texts = [
    'Space Weather Scientist',
    'Data Analytics Expert',
    'Complex Systems Thinker',
    'Open Source Contributor',
    'Science Communicator',
    'Python Developer'
  ];

  let textIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let pauseTimer = null;

  function type() {
    const current = texts[textIdx];
    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? 50 : 90;

    if (!isDeleting && charIdx === current.length) {
      delay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      textIdx = (textIdx + 1) % texts.length;
      delay = 400;
    }

    pauseTimer = setTimeout(type, delay);
  }

  type();
}

/* ---------- Navigation ---------- */
function initNav() {
  const nav = document.querySelector('nav');
  const scrollTop = document.getElementById('scroll-top');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  // Scroll effects
  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    if (nav) nav.classList.toggle('scrolled', y > 50);
    if (scrollTop) scrollTop.classList.toggle('visible', y > 500);

    // Active nav link
    let current = '';
    sections.forEach(s => {
      if (y >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

  // Mobile menu
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      menuToggle.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.textContent = '☰';
      });
    });
  }

  // Scroll to top
  if (scrollTop) {
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ---------- Theme Toggle ---------- */
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('sc-theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  if (btn) btn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('sc-theme', next);
      btn.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }
}

/* ---------- Intersection Observer Animations ---------- */
function initAnimations() {
  const fadeEls = document.querySelectorAll('.fade-in');
  const timelineItems = document.querySelectorAll('.timeline-item');
  const skillFills = document.querySelectorAll('.skill-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  fadeEls.forEach(el => observer.observe(el));
  timelineItems.forEach(el => observer.observe(el));

  // Skill bars
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(el => skillObserver.observe(el));

  // Counter animation
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'));
        const suffix = entry.target.getAttribute('data-suffix') || '';
        animateCounter(entry.target, target, suffix);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));
}

function animateCounter(el, target, suffix) {
  let current = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, 25);
}

/* ---------- Project Filter ---------- */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const show = filter === 'all' || category === filter;
        card.style.display = show ? 'block' : 'none';
        if (show) {
          card.style.animation = 'pageEnter 0.3s ease forwards';
        }
      });
    });
  });
}

/* ---------- Contact Form ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate sending (replace with actual backend or Formspree)
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      form.reset();
      showToast('Message sent! I\'ll get back to you soon. ✓');
    }, 1500);
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }
}

/* ---------- Smooth hover ripple on cards ---------- */
function initRipple() {
  document.querySelectorAll('.expertise-card, .project-card, .blog-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
  initTypedText();
  initNav();
  initTheme();
  initAnimations();
  initProjectFilter();
  initContactForm();
  initRipple();
});
