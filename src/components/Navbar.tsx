import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
  };

  const handleOrderClick = () => {
    console.log('Order now clicked!');
    setIsMobileMenuOpen(false); 
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className={`navbar-parent ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <div className="navbar-brand-logo">
              <div className="navbar-brand-name">Eclipse Dine</div>
            </div>
            <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <div className={`navbar-links ${isMobileMenuOpen ? 'navbar-links-open' : ''}`}>
            {['Home', 'Menu', 'About', 'Contact'].map((link) => (
              <div
                key={link}
                className={`navbar-link ${activeLink === link ? 'active' : ''}`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
                <div className="navbar-link-underline"></div>
              </div>
            ))}
            <div 
              className="navbar-order-btn"
              onClick={handleOrderClick}
            >
              <span>Order Now</span>
              <div className="btn-hover-effect"></div>
            </div>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div 
          className="navbar-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}