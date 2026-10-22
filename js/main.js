(function () {
  'use strict';

  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };

  function esc(str) {
    return String(str == null ? '' : str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function mediaHTML(item) {
    if (item.image) return '<img src="' + esc(item.image) + '" alt="' + esc(item.title) + '" loading="lazy">';
    var g = item.gradient || ['#2997ff', '#bf5af2'];
    return '<div style="width:100%;height:100%;background:linear-gradient(150deg,' + esc(g[0]) + ',' + esc(g[1]) + ')"></div>';
  }

  // ===== 渲染内容 =====
  var age = new Date().getFullYear() - S.birthYear;

  document.title = S.name;
  $('navLogo').textContent = S.name;
  $('heroEyebrow').textContent = S.role;
  $('heroName').textContent = S.name;
  $('heroTagline').textContent = S.tagline;

  $('avatar').innerHTML = S.avatar
    ? '<img src="' + esc(S.avatar) + '" alt="' + esc(S.name) + '">'
    : esc(S.name.charAt(0));
  $('aboutName').textContent = S.name;
  $('aboutMeta').textContent = age + ' 岁 · ' + S.city;
  $('aboutBio').textContent = S.bio;

  $('stats').innerHTML = S.stats.map(function (s) {
    return '<div class="stat reveal"><div class="stat-value" data-count="' + s.value + '" data-suffix="' + esc(s.suffix || '') + '">0' + esc(s.suffix || '') + '</div>' +
      '<div class="stat-label">' + esc(s.label) + '</div></div>';
  }).join('');

  $('timeline').innerHTML = S.experience.map(function (e) {
    return '<li class="tl-item reveal">' +
      '<div class="tl-period">' + esc(e.period) + '</div>' +
      '<h3 class="tl-title">' + esc(e.title) + '</h3>' +
      '<div class="tl-org">' + esc(e.org) + '</div>' +
      '<p class="tl-desc">' + esc(e.desc) + '</p></li>';
  }).join('');

  $('bento').innerHTML = S.projects.map(function (p) {
    return '<article class="project reveal' + (p.featured ? ' featured' : '') + '">' +
      (p.featured ? '<p class="card-eyebrow">精选项目</p>' : '') +
      '<h3>' + esc(p.title) + '</h3>' +
      '<p>' + esc(p.desc) + '</p>' +
      (p.link ? '<a class="link-arrow" href="' + esc(p.link) + '" target="_blank" rel="noopener">了解更多</a>' : '') +
      '<div class="tags">' + (p.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
      '</article>';
  }).join('');

  $('gallery').innerHTML = S.portfolio.map(function (w, i) {
    return '<button class="work" data-index="' + i + '" aria-label="查看 ' + esc(w.title) + '">' +
      '<div class="work-media">' + mediaHTML(w) + '</div>' +
      '<div class="work-text"><p class="card-eyebrow">' + esc(w.category) + '</p><h3>' + esc(w.title) + '</h3></div>' +
      '<span class="work-plus" aria-hidden="true">+</span></button>';
  }).join('');

  var c = S.contact;
  $('contactTitle').textContent = c.title;
  $('contactSub').textContent = c.sub;
  $('contactLinks').innerHTML =
    (c.email ? '<a class="btn btn-primary" href="mailto:' + esc(c.email) + '">发邮件给我</a>' : '') +
    (c.links || []).map(function (l) {
      return l.url
        ? '<a class="link-arrow" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>'
        : '<span>' + esc(l.label) + '</span>';
    }).join('');

  $('footerText').textContent = 'Copyright © ' + new Date().getFullYear() + ' ' + S.name + '。保留所有权利。';

  // ===== 主题切换 =====
  var root = document.documentElement;
  var darkMQ = window.matchMedia('(prefers-color-scheme: dark)');
  $('themeToggle').addEventListener('click', function () {
    var current = root.getAttribute('data-theme') || (darkMQ.matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // ===== 导航 =====
  var nav = $('nav');
  var menuBtn = $('menuToggle');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  $('navLinks').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // ===== 数字计数 =====
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp(el) {
    var target = +el.dataset.count, suffix = el.dataset.suffix, start = null, dur = 1400;
    if (reduceMotion) { el.textContent = target + suffix; return; }
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // ===== 滚动渐显 =====
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        var num = entry.target.querySelector('[data-count]');
        if (num) countUp(num);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el, i) {
      // 同一容器内的兄弟元素依次延迟
      var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.transitionDelay = Math.min(idx, 5) * 80 + 'ms';
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('[data-count]').forEach(countUp);
  }

  // ===== 作品集横滑 =====
  var gallery = $('gallery'), prev = $('galleryPrev'), next = $('galleryNext');
  function stepSize() {
    var card = gallery.querySelector('.work');
    return card ? card.offsetWidth + 20 : 300;
  }
  function updateArrows() {
    prev.disabled = gallery.scrollLeft <= 4;
    next.disabled = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 4;
  }
  prev.addEventListener('click', function () { gallery.scrollBy({ left: -stepSize(), behavior: 'smooth' }); });
  next.addEventListener('click', function () { gallery.scrollBy({ left: stepSize(), behavior: 'smooth' }); });
  gallery.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  updateArrows();

  // ===== Lightbox =====
  var lb = $('lightbox'), lastFocus = null;
  function openLB(i) {
    var w = S.portfolio[i];
    $('lbMedia').innerHTML = mediaHTML(w);
    $('lbCategory').textContent = w.category;
    $('lbTitle').textContent = w.title;
    $('lbDesc').textContent = w.desc;
    var link = $('lbLink');
    link.style.display = w.link ? '' : 'none';
    if (w.link) link.href = w.link;
    lastFocus = document.activeElement;
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lightbox-close').focus();
  }
  function closeLB() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  gallery.addEventListener('click', function (e) {
    var card = e.target.closest('.work');
    if (card) openLB(+card.dataset.index);
  });
  lb.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) closeLB();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb.classList.contains('open')) closeLB();
  });
})();
