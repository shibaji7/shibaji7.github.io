/* Inject shared sidebar + topbar */
(function(){
  const root = document.getElementById('nav-root') || document.body;

  const html = `
<!-- Top bar (mobile) -->
<div id="topbar">
  <button class="topbar-btn" id="menu-open">&#9776;</button>
  <span class="topbar-name">Shibaji Chakraborty</span>
  <button id="theme-toggle-top" onclick="document.getElementById('theme-toggle').click()" style="background:none;border:none;color:#8ba7c2;font-size:1.1rem;cursor:pointer;padding:4px 8px;">☾</button>
</div>

<!-- Overlay -->
<div id="overlay"></div>

<!-- Sidebar -->
<nav id="sidebar">
  <button class="sidebar-close" id="sidebar-close">&#10005;</button>

  <div class="sidebar-profile">
    <a href="index.html"><img src="assets/img/headshot.png" alt="Shibaji Chakraborty" class="sidebar-photo"></a>
    <div class="sidebar-name">Shibaji Chakraborty</div>
    <div class="sidebar-title">Research Scientist<br>SAIL · ERAU</div>
  </div>

  <nav class="sidebar-nav">
    <div class="nav-section">
      <span class="nav-section-label">Main</span>
      <a href="index.html"       class="nav-link"><span class="nav-icon">⌂</span> About</a>
      <a href="research.html"    class="nav-link"><span class="nav-icon">⚗</span> Research</a>
      <a href="publications.html"class="nav-link"><span class="nav-icon">📄</span> Publications</a>
      <a href="projects.html"    class="nav-link"><span class="nav-icon">🔬</span> Projects</a>
      <a href="teaching.html"    class="nav-link"><span class="nav-icon">🎓</span> Teaching</a>
      <a href="blog.html"        class="nav-link"><span class="nav-icon">✍</span> Writing</a>
    </div>

    <div class="nav-section">
      <span class="nav-section-label">Documents</span>
      <a href="cv.html"          class="nav-link"><span class="nav-icon">📋</span> Curriculum Vitae</a>
      <a href="cv-1page.html"    class="nav-link nav-sub-item" style="padding-left:42px;font-size:0.8rem;"><span class="nav-icon" style="font-size:0.8rem;">↳</span> 1-Page CV</a>
      <a href="cv-2page.html"    class="nav-link nav-sub-item" style="padding-left:42px;font-size:0.8rem;"><span class="nav-icon" style="font-size:0.8rem;">↳</span> 2-Page CV</a>
      <a href="assets/pdf/Chakraborty.pdf"  target="_blank" class="nav-link nav-sub-item" style="padding-left:42px;font-size:0.8rem;"><span class="nav-icon" style="font-size:0.8rem;">↓</span> Download PDF</a>
      <a href="assets/pdf/Chakraborty.docx" download        class="nav-link nav-sub-item" style="padding-left:42px;font-size:0.8rem;"><span class="nav-icon" style="font-size:0.8rem;">↓</span> Download DOCX</a>
    </div>
  </nav>

  <button id="theme-toggle">☾ Dark mode</button>

  <div class="sidebar-social">
    <a href="mailto:chakras4@erau.edu"       class="social-btn" title="Email">@</a>
    <a href="https://github.com/shibaji7"    class="social-btn" target="_blank" title="GitHub">GH</a>
    <a href="https://www.linkedin.com/in/shibaji-chakraborty-48bb4065" class="social-btn" target="_blank" title="LinkedIn">in</a>
    <a href="https://twitter.com/shibaji22"  class="social-btn" target="_blank" title="Twitter">𝕏</a>
    <a href="https://orcid.org/0000-0001-6792-0037" class="social-btn" target="_blank" title="ORCID">iD</a>
  </div>
</nav>`;

  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.insertBefore(container, document.body.firstChild);
})();
