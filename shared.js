// Shared nav and footer injected on every page
const NAV_HTML = `
<nav id="navbar">
  <a href="index.html" class="nav-logo">Bos<span>huisjes</span></a>
  <ul class="nav-links">
    <li><a href="index.html" data-page="index">Home</a></li>
    <li><a href="boshuisje.html" data-page="boshuisje">Boshuisje</a></li>
    <li><a href="chez-michel.html" data-page="chez-michel">Chez-Michel</a></li>
    <li><a href="area.html" data-page="area">The Area</a></li>
    <li><a href="hosts.html" data-page="hosts">Your Hosts</a></li>
    <li><a href="rules.html" data-page="rules">House Rules</a></li>
    <li><a href="contact.html" data-page="contact" class="nav-book">Book Now</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <a href="index.html" class="nav-logo">Bos<span>huisjes</span></a>
      <p>Two privately owned forest cottages in the oak woods of Wageningen. A place to slow down, breathe, and be still.</p>
      <div class="footer-rating">
        <span class="footer-rating-score">9.3</span>
        <span class="footer-rating-text">Wonderful · Booking.com</span>
      </div>
    </div>
    <div class="footer-col">
      <h4>Cottages</h4>
      <ul>
        <li><a href="boshuisje.html">Boshuisje (A06)</a></li>
        <li><a href="chez-michel.html">Chez-Michel (A04)</a></li>
        <li><a href="contact.html">Check Availability</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Information</h4>
      <ul>
        <li><a href="area.html">The Area</a></li>
        <li><a href="hosts.html">Your Hosts</a></li>
        <li><a href="rules.html">House Rules</a></li>
        <li><a href="rules.html#cancel">Cancellation Policy</a></li>
        <li><a href="rules.html#privacy">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <address>
        Christopher & Zuzana<br>Zoomweg 7 A06<br>Wageningen, Netherlands<br><br>
        <a href="tel:+31649443739" style="color:var(--gold);text-decoration:none">+31 06 4944 3739</a><br>
        <a href="tel:+31617811578" style="color:rgba(200,169,110,.6);text-decoration:none;font-size:.8rem">+31 06 1781 1578 (Zuzana)</a>
      </address>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Boshuisjes · Wageningen, Netherlands · All rights reserved.</span>
    <div class="lang-switcher">
      <a href="#">EN</a><a href="#">NL</a><a href="#">DE</a><a href="#">FR</a><a href="#">ES</a><a href="#">SK</a>
    </div>
  </div>
</footer>`;

function initPage(activePage) {
  // Inject nav & footer
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Mark active nav link
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === activePage) a.classList.add('active');
  });

  // Sticky nav (only on pages without solid class)
  const navbar = document.getElementById('navbar');
  if (!navbar.classList.contains('solid')) {
    window.addEventListener('scroll', () =>
      navbar.classList.toggle('scrolled', window.scrollY > 60)
    );
  }

  // Scroll reveal
  const obs = new IntersectionObserver(entries =>
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}
