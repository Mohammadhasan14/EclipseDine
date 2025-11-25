import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

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
  };

  const handleOrderClick = () => {
    console.log('Order now clicked!');
  };

  return (
    <div className={`navbar-parent ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-brand-logo">
        <div className="navbar-brand-name">Eclipse Dine</div>
      </div>
      <div className="navbar-links">
        {['Home', 'Menu', 'About', 'Contact'].map((link) => (
          <div
            key={link}
            className={`navbar-link ${activeLink === link ? 'active' : ''}`}
            onClick={() => handleLinkClick(link)}
          >
            {link}
          </div>
        ))}
        <div 
          className="navbar-order-btn"
          onClick={handleOrderClick}
        >
          Order Now
        </div>
      </div>
    </div>
  );
}