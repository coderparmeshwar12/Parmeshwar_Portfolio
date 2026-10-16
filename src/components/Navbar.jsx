import React, { useState, useEffect } from "react";
import { CupcakeIcon } from "./DessertIcons";
import { personalInfo } from "../data/portfolio";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Beyond Code", href: "#interests" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = ["hero", "about", "skills", "projects", "interests", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`navbar-header ${scrolled ? "navbar-scrolled" : ""}`}
      id="navbar"
    >
      <div className="navbar-container">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="navbar-brand"
          aria-label="Parmeshwar Shinde Home"
        >
          <div className="brand-badge">
            <CupcakeIcon size={24} className="brand-cupcake" />
          </div>
          <div className="brand-text">
            <span className="brand-initials">{personalInfo.initials}</span>
            <span className="brand-name">{personalInfo.shortName}</span>
          </div>
          <span className="brand-tag">backend</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const secId = link.href.replace("#", "");
              const isActive = activeSection === secId;

              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.name}
                    {isActive && <span className="active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="navbar-actions desktop-only">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-frosted-nav"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-menu-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <div className="mobile-brand">
              <CupcakeIcon size={24} />
              <span>{personalInfo.name}</span>
            </div>
            <span className="mobile-role">{personalInfo.role}</span>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="mobile-nav-item">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`mobile-nav-link ${
                    activeSection === link.href.replace("#", "") ? "active" : ""
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-primary w-full text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
