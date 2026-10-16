import React, { useState } from "react";
import { personalInfo } from "../data/portfolio";
import { ThreeCupcake } from "./ThreeCupcake";
import { CupcakeIcon, MacaronIcon, DonutIcon, FrostingSwirl } from "./DessertIcons";
import {
  Mail,
  ArrowDown,
  Terminal,
  Cpu,
  Sparkles,
  ExternalLink,
  Code2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Ambient background glow orbs */}
      <div className="hero-glow hero-glow-pink" aria-hidden="true" />
      <div className="hero-glow hero-glow-lavender" aria-hidden="true" />
      <div className="hero-glow hero-glow-cyan" aria-hidden="true" />

      <div className="hero-container">
        {/* Left Column: Introduction & Call-to-Actions */}
        <div className="hero-content">
          {/* Sweet Pill Badge */}
          <div className="hero-badge">
            <span className="badge-dessert-icon">
              <CupcakeIcon size={18} />
            </span>
            <span className="badge-text">Code &amp; Cupcakes Theme</span>
            <span className="badge-dot" />
            <span className="badge-sub">{personalInfo.education}</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Hey, I'm <span className="text-gradient-pink">{personalInfo.name}</span>.
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle">
            Backend Engineer in the Making. <span className="hero-subtitle-dim">Software Builder by Passion.</span>
          </h2>

          {/* Supporting Text */}
          <p className="hero-description">
            BE Computer Engineering student at{" "}
            <a
              href={personalInfo.socials.collegeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-highlight"
            >
              Trinity Academy of Engineering, Pune
            </a>
            , passionate about backend engineering, AI/ML, cloud technologies, DevOps, and Kubernetes.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <button
              onClick={() => scrollTo("projects")}
              className="btn-primary"
              id="hero-explore-btn"
            >
              <span>Explore My Work</span>
              <ArrowDown size={18} className="btn-icon-bounce" />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="btn-secondary"
              id="hero-connect-btn"
            >
              <span>Let's Connect</span>
              <Sparkles size={17} />
            </button>
          </div>

          {/* Social Icons & Email Quick Link */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="social-links-row">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="social-icon-btn"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail size={20} />
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-copy-chip"
                title="Click to copy email"
              >
                <span>{copiedEmail ? "Copied!" : personalInfo.socials.email}</span>
              </button>
            </div>
          </div>

          {/* Micro Terminal Snippet */}
          <div className="hero-terminal-card" aria-label="Terminal command status">
            <div className="terminal-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="terminal-title">parmeshwar@trinity-backend:~</span>
            </div>
            <div className="terminal-body">
              <span className="prompt-symbol">$</span>
              <span className="terminal-command">build --focus=backend --stack=java,golang,kafka</span>
              <span className="cursor-blink">_</span>
              <div className="terminal-output">
                ✔ Initialized robust architecture | 🧁 Serving sweet distributed systems
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Personal Photo Area + Floating 3D Elements */}
        <div className="hero-visual">
          <div className="photo-container-wrapper">
            {/* Outer animated gradient halo */}
            <div className="photo-halo-ring" aria-hidden="true" />
            <div className="photo-backdrop-frosting" aria-hidden="true" />

            {/* The Photo Container */}
            <div className="photo-frame" id="personal-photo-container">
              {!imageError ? (
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="personal-photo"
                  onError={() => setImageError(true)}
                  loading="eager"
                />
              ) : (
                /* Fallback if user's custom photo path isn't found */
                <div className="photo-fallback">
                  <div className="photo-fallback-icon">
                    <CupcakeIcon size={56} />
                  </div>
                  <span className="photo-fallback-title">your-photo.png</span>
                  <span className="photo-fallback-sub">Add photo to /public/your-photo.png</span>
                  <span className="photo-fallback-name">{personalInfo.name}</span>
                </div>
              )}

              {/* Photo Frame Overlay Badge */}
              <div className="photo-tag-pill">
                <span className="photo-status-dot" />
                <span>Backend Developer</span>
              </div>
            </div>

            {/* FLOATING SATELLITES & 3D DESSERT ELEMENTS */}

            {/* Floating Satellite 1: Interactive 3D Cupcake widget */}
            <div className="floating-satellite satellite-cupcake" title="Interactive 3D Cupcake (Click or move cursor)">
              <div className="satellite-content">
                <ThreeCupcake size={130} />
              </div>
              <div className="satellite-tooltip">
                <span>🧁 3D Cupcake</span>
              </div>
            </div>

            {/* Floating Satellite 2: Java & Spring Boot Badge */}
            <div className="floating-satellite satellite-java">
              <div className="badge-chip">
                <span className="badge-icon-wrap">☕</span>
                <span className="badge-text-primary">Java • Spring</span>
              </div>
            </div>

            {/* Floating Satellite 3: Golang & Kafka Badge */}
            <div className="floating-satellite satellite-kafka">
              <div className="badge-chip">
                <span className="badge-icon-wrap">⚡</span>
                <span className="badge-text-primary">Go &amp; Kafka</span>
              </div>
            </div>

            {/* Floating Satellite 4: Code Brackets Accent */}
            <div className="floating-satellite satellite-code">
              <div className="badge-code-chip">
                <code>&#123; role: "backend" &#125;</code>
              </div>
            </div>

            {/* Floating Satellite 5: Gaming Hobby Badge */}
            <div className="floating-satellite satellite-gaming">
              <div className="badge-chip">
                <span className="badge-icon-wrap">🎮</span>
                <span className="badge-text-primary">Building &amp; Gaming</span>
              </div>
            </div>

            {/* Floating Macaron illustration */}
            <div className="floating-satellite satellite-macaron" aria-hidden="true">
              <MacaronIcon size={38} />
            </div>

            {/* Floating Donut illustration */}
            <div className="floating-satellite satellite-donut" aria-hidden="true">
              <DonutIcon size={34} />
            </div>
          </div>

          {/* Quick Photo Replacement Helper note (only shown if photo is missing) */}
          {imageError && (
            <div className="photo-helper-notice">
              <span className="helper-label">Photo path:</span>
              <code>{personalInfo.photoUrl}</code>
              <span className="helper-hint">(Configured in portfolio.js)</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
