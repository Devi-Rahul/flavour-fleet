const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Flavour Fleet</h3>
            <p>Bringing world flavors to your table since 2010.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
  <a href="https://facebook.com" aria-label="Facebook">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="https://instagram.com" aria-label="Instagram">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://twitter.com" aria-label="Twitter">
    <i className="fab fa-twitter"></i>
  </a>
</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Flavour Fleet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;