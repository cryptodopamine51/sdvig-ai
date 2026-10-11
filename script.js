(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    const setMenuOpen = open => {
      nav.classList.toggle('open', open);
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    };
    const closeMenu = () => setMenuOpen(false);
    toggle.addEventListener('click', () => setMenuOpen(!nav.classList.contains('open')));
    nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });
    document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 950) closeMenu(); });
  }
})();
