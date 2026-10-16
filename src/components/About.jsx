import React from "react";
import { personalInfo, aboutPillars } from "../data/portfolio";
import { TiltCard } from "./TiltCard";
import { CupcakeIcon, FrostingSwirl, MacaronIcon } from "./DessertIcons";
import {
  Server,
  Cloud,
  Cpu,
  Gamepad2,
  Code,
  GraduationCap,
  Sparkles,
  MapPin,
  CheckCircle2
} from "lucide-react";

export const About = () => {
  const getPillarIcon = (type) => {
    switch (type) {
      case "code":
        return <Server className="pillar-icon-svg text-pink" size={26} />;
      case "cloud":
        return <Cloud className="pillar-icon-svg text-lavender" size={26} />;
      case "cpu":
        return <Cpu className="pillar-icon-svg text-cyan" size={26} />;
      default:
        return <Code className="pillar-icon-svg" size={26} />;
    }
  };

  return (
    <section className="about-section section-padding" id="about">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <CupcakeIcon size={18} />
            <span>Behind The Screen</span>
          </div>
          <h2 className="section-title">A Little About Me</h2>
          <div className="title-underline">
            <span className="line" />
            <FrostingSwirl size={20} className="underline-swirl" />
            <span className="line" />
          </div>
        </div>

        {/* Narrative & Bio Box */}
        <div className="about-bio-card">
          <div className="bio-card-decorative-corner" aria-hidden="true" />
          <div className="bio-card-content">
            <div className="bio-header-meta">
              <div className="meta-item">
                <GraduationCap size={18} className="meta-icon text-pink" />
                <span>BE Computer Engineering</span>
              </div>
              <div className="meta-item">
                <MapPin size={18} className="meta-icon text-cyan" />
                <span>Trinity Academy of Engineering, Pune</span>
              </div>
              <div className="meta-item">
                <Sparkles size={18} className="meta-icon text-lavender" />
                <span>Aspiring Backend Engineer</span>
              </div>
            </div>

            <p className="bio-main-text">{personalInfo.bio}</p>

            <div className="bio-badges-row">
              <div className="bio-badge">
                <Code size={16} className="text-pink" />
                <span>Passion: Building Software</span>
              </div>
              <div className="bio-badge">
                <Gamepad2 size={16} className="text-cyan" />
                <span>Hobby: Playing Games</span>
              </div>
              <div className="bio-badge">
                <Server size={16} className="text-lavender" />
                <span>Focus: Distributed Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Interactive Pillar Cards */}
        <div className="pillars-grid">
          {aboutPillars.map((pillar) => (
            <TiltCard
              key={pillar.id}
              className={`pillar-card pillar-${pillar.accent}`}
              maxTilt={6}
            >
              <div className="pillar-card-header">
                <div className={`pillar-icon-wrapper bg-${pillar.accent}`}>
                  {getPillarIcon(pillar.iconType)}
                </div>
                <span className={`pillar-tag tag-${pillar.accent}`}>
                  {pillar.badge}
                </span>
              </div>

              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>

              <div className="pillar-footer">
                <span className="pillar-dessert-cue">
                  <span className="dot-candy" />
                  Code &amp; Cupcakes Recipe
                </span>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Personal Values / Philosophy Banner */}
        <div className="about-quote-box">
          <div className="quote-icon-col">
            <span className="quote-symbol">“</span>
          </div>
          <div className="quote-text-col">
            <p className="quote-text">
              Great software is like a meticulously crafted recipe: thoughtful ingredients, clear structure, and the patience to refine every single layer until it runs effortlessly.
            </p>
            <span className="quote-author">— Parmeshwar Shinde</span>
          </div>
        </div>
      </div>
    </section>
  );
};
