import React, { useState } from "react";
import { techStack } from "../data/portfolio";
import { TechIcon } from "./TechIcons";
import { TiltCard } from "./TiltCard";
import { CupcakeIcon, FrostingSwirl, MacaronIcon } from "./DessertIcons";
import { Wrench, CheckCircle, Sparkles, Terminal, Layers } from "lucide-react";

export const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "backend", label: "Backend & Systems" },
    { id: "streaming", label: "Event Streaming" },
    { id: "vcs", label: "Dev Tools & Git" }
  ];

  const filteredTech = techStack.filter((tech) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "backend") return ["Java", "Spring Boot", "Golang"].includes(tech.name);
    if (activeFilter === "streaming") return ["Apache Kafka"].includes(tech.name);
    if (activeFilter === "vcs") return ["Git", "GitHub"].includes(tech.name);
    return true;
  });

  return (
    <section className="tech-section section-padding" id="skills">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <Wrench size={18} />
            <span>Core Toolkit</span>
          </div>
          <h2 className="section-title">Tools I Build With</h2>
          <div className="title-underline">
            <span className="line" />
            <FrostingSwirl size={20} className="underline-swirl" />
            <span className="line" />
          </div>
          <p className="section-subtitle">
            Focused on high-performance backend development, distributed message streaming, and dependable software workflows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="tech-filter-pills" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`filter-pill-btn ${activeFilter === cat.id ? "active" : ""}`}
              role="tab"
              aria-selected={activeFilter === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="tech-grid">
          {filteredTech.map((tech) => (
            <TiltCard
              key={tech.name}
              className="tech-card"
              maxTilt={7}
            >
              <div className="tech-card-header">
                <div
                  className="tech-icon-container"
                  style={{ "--tech-accent": tech.color }}
                >
                  <TechIcon name={tech.name} size={42} />
                </div>
                <div className="tech-header-meta">
                  <span className="tech-category">{tech.category}</span>
                  <span className="tech-badge-pill">{tech.badge}</span>
                </div>
              </div>

              <div className="tech-card-body">
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-description">{tech.description}</p>
              </div>

              <div className="tech-card-footer">
                <div className="tech-sprinkle-row">
                  <span className="sprinkle-pill" style={{ backgroundColor: tech.color }} />
                  <span className="sprinkle-pill lavender" />
                  <span className="sprinkle-pill cyan" />
                </div>
                <span className="tech-status-label">Production Grade</span>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Note on authenticity - no fake progress bars */}
        <div className="tech-authenticity-card">
          <div className="authenticity-icon">
            <Sparkles size={22} className="text-pink" />
          </div>
          <div className="authenticity-text">
            <h4>No Gimmicks, Just Code</h4>
            <p>
              Rather than using arbitrary percentage bars (e.g. "87% Java"), I focus on understanding JVM internals, concurrent Goroutines, Kafka partition logic, and building functional architectures that deliver results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
