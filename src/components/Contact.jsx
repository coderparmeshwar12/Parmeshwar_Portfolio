import React, { useState } from "react";
import { personalInfo } from "../data/portfolio";
import { CupcakeIcon, FrostingSwirl, MacaronIcon } from "./DessertIcons";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMailtoSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      subject || `Hello from ${senderName || "Portfolio Visitor"}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${senderName || "Friend"}\n\nMessage:\n${message}\n\n---\nSent from Parmeshwar's Portfolio`
    );
    window.location.href = `mailto:${personalInfo.socials.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <MessageSquare size={18} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Build Something Cool.</h2>
          <div className="title-underline">
            <span className="line" />
            <FrostingSwirl size={20} className="underline-swirl" />
            <span className="line" />
          </div>
          <p className="section-subtitle">
            Have an idea, an interesting project, or an opportunity to discuss? Let's connect.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Links & Info Card */}
          <div className="contact-info-card">
            <div className="contact-card-badge">
              <CupcakeIcon size={20} />
              <span>Direct Channels</span>
            </div>

            <h3 className="contact-info-title">Let's chat about backend, systems, or games.</h3>
            <p className="contact-info-desc">
              Whether you want to discuss Spring Boot microservices, Kafka pipelines, Golang concurrency, or explore potential opportunities, my inbox is always open.
            </p>

            <div className="contact-channels-list">
              {/* Email Item */}
              <div className="channel-item">
                <div className="channel-icon-box bg-pink">
                  <Mail size={20} className="text-pink" />
                </div>
                <div className="channel-content">
                  <span className="channel-label">Email Address</span>
                  <div className="channel-value-row">
                    <a
                      href={`mailto:${personalInfo.socials.email}`}
                      className="channel-link"
                    >
                      {personalInfo.socials.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="btn-channel-copy"
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check size={15} className="text-green" /> : <Copy size={15} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* GitHub Item */}
              <div className="channel-item">
                <div className="channel-icon-box bg-lavender">
                  <GithubIcon size={20} className="text-lavender" />
                </div>
                <div className="channel-content">
                  <span className="channel-label">GitHub</span>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-link"
                  >
                    github.com/parmeshwar-shinde
                  </a>
                </div>
              </div>

              {/* LinkedIn Item */}
              <div className="channel-item">
                <div className="channel-icon-box bg-cyan">
                  <LinkedinIcon size={20} className="text-cyan" />
                </div>
                <div className="channel-content">
                  <span className="channel-label">LinkedIn</span>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-link"
                  >
                    linkedin.com/in/parmeshwar-shinde
                  </a>
                </div>
              </div>

              {/* Location Item */}
              <div className="channel-item">
                <div className="channel-icon-box bg-yellow">
                  <MapPin size={20} className="text-yellow" />
                </div>
                <div className="channel-content">
                  <span className="channel-label">Location &amp; College</span>
                  <span className="channel-text">
                    {personalInfo.college}, {personalInfo.socials.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="contact-status-box">
              <span className="status-live-dot" />
              <span>Currently open to backend engineering internships &amp; collaborative builds.</span>
            </div>
          </div>

          {/* Right Column: Interactive Quick Message / Mail Dispatcher */}
          <div className="contact-form-card">
            <div className="form-card-header">
              <h3 className="form-title">Send a Quick Dispatch</h3>
              <p className="form-desc">
                Fill this out to generate an instant email to me via your default mail client.
              </p>
            </div>

            <form onSubmit={handleMailtoSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="sender-name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="sender-name"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex Doe"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject-input" className="form-label">
                  Topic / Subject
                </label>
                <input
                  type="text"
                  id="subject-input"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Backend Collaboration or Project Idea"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message-text" className="form-label">
                  Message
                </label>
                <textarea
                  id="message-text"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Parmeshwar, I saw your portfolio and wanted to discuss..."
                  className="form-textarea"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full btn-send-cta">
                <span>Dispatch Email to Parmeshwar</span>
                <Send size={18} />
              </button>

              <div className="form-privacy-note">
                <span>🧁 Note: Connects safely via standard mailto. You can also wire this to Formspree/EmailJS anytime.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
