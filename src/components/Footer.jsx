import React from "react";
import { personalInfo } from "../data/portfolio";
import { CupcakeIcon } from "./DessertIcons";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Left Column: Brand & Copyright */}
        <div className="footer-left">
          <div className="footer-brand">
            <CupcakeIcon size={22} className="footer-cupcake" />
            <span className="footer-brand-title">Code &amp; Cupcakes</span>
          </div>
          <p className="footer-copy">
            Designed &amp; Built by <strong className="text-white">{personalInfo.name}</strong>
          </p>
          <span className="footer-sub">
            © {currentYear} • Trinity Academy of Engineering, Pune. All rights reserved.
          </span>
        </div>

        {/* Center: Social Links */}
        <div className="footer-center">
          <div className="footer-social-row">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="footer-social-btn"
              aria-label="Email"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="footer-stack-hint">
            <span>Powered by Java, Go &amp; Sweet Sprinkles</span>
          </div>
        </div>

        {/* Right: Back to Top Button */}
        <div className="footer-right">
          <button
            onClick={scrollToTop}
            className="btn-back-to-top"
            aria-label="Scroll back to top of page"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
