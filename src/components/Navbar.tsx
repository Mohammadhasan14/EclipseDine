import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  return (
    <div className={`navbar-parent ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-brand-logo">
        <div className="navbar-brand-name">Eclipse Dine</div>
      </div>
      <div className="navbar-links">
        <div className="navbar-link">Home</div>
        <div className="navbar-link">Menu</div>
        <div className="navbar-link">About</div>
        <div className="navbar-link">Contact</div>
        <div className="navbar-order-btn">Order Now</div>
      </div>
    </div>
  )
}
