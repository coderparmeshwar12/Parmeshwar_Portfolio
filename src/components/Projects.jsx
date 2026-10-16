import React, { useState } from "react";
import { projectsData, emptyProjectsMessage } from "../data/portfolio";
import { TiltCard } from "./TiltCard";
import { TechIcon } from "./TechIcons";
import { CupcakeIcon, FrostingSwirl, MacaronIcon, DonutIcon } from "./DessertIcons";
import {
  ExternalLink,
  FolderGit2,
  Sparkles,
  Terminal,
  Code2,
  CheckCircle,
  Clock,
  Layers,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export const Projects = () => {
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [projects] = useState(projectsData);

  return (
    <section className="projects-section section-padding" id="projects">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <FolderGit2 size={18} />
            <span>Featured Software</span>
          </div>
          <h2 className="section-title">Things I've Built</h2>
          <div className="title-underline">
            <span className="line" />
            <FrostingSwirl size={20} className="underline-swirl" />
            <span className="line" />
          </div>
          <p className="section-subtitle">
            Backend architectures, distributed streaming prototypes, and scalable systems built with Java, Go, and Kafka.
          </p>

          {/* Quick toggle for demonstration between projects view and empty state message */}
          <div className="projects-view-toggle">
            <button
              onClick={() => setShowEmptyState(false)}
              className={`toggle-btn ${!showEmptyState ? "active" : ""}`}
            >
              Show Featured Projects ({projects.length})
            </button>
            <button
              onClick={() => setShowEmptyState(true)}
              className={`toggle-btn ${showEmptyState ? "active" : ""}`}
            >
              Preview "Building in Progress" View
            </button>
          </div>
        </div>

        {/* Empty State Banner (If user chooses or has no projects yet) */}
        {showEmptyState || projects.length === 0 ? (
          <div className="empty-projects-card">
            <div className="empty-icon-wrapper">
              <CupcakeIcon size={48} />
            </div>
            <h3 className="empty-title">{emptyProjectsMessage.title}</h3>
            <p className="empty-message">{emptyProjectsMessage.message}</p>
            <div className="empty-action">
              <a
                href="https://github.com/parmeshwar-shinde"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <GithubIcon size={18} />
                <span>Visit My GitHub Repositories</span>
              </a>
            </div>
          </div>
        ) : (
          /* Projects Grid */
          <div className="projects-grid">
            {projects.map((project, index) => (
              <TiltCard
                key={project.id}
                className="project-card"
                maxTilt={6}
              >
                {/* Project Card Media Header / Architecture Graphic */}
                <div className="project-card-media">
                  <div className="project-media-gradient">
                    <div className="media-code-preview">
                      <div className="code-dot-row">
                        <span className="c-dot red" />
                        <span className="c-dot yellow" />
                        <span className="c-dot green" />
                        <span className="code-filename">
                          {project.id}.{project.tech[0]?.toLowerCase() || "go"}
                        </span>
                      </div>
                      <div className="code-lines">
                        <span className="line-num">01</span>
                        <span className="token-keyword">package</span> main
                        <br />
                        <span className="line-num">02</span>
                        <span className="token-func">func</span> InitializeWorker() &#123;
                        <br />
                        <span className="line-num">03</span>
                        &nbsp;&nbsp;stream := kafka.NewTopic("{project.id}")
                        <br />
                        <span className="line-num">04</span>
                        &nbsp;&nbsp;return stream.Serve()
                        <br />
                        <span className="line-num">05</span>
                        &#125;
                      </div>
                    </div>
                  </div>

                  {/* Badges on media */}
                  <div className="media-badge-group">
                    <span className="project-category-tag">{project.featuredBadge}</span>
                    <span className="project-status-tag">
                      <Clock size={12} />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="project-card-body">
                  <span className="project-subtitle">{project.subtitle}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Highlights Bullet List */}
                  {project.highlights && (
                    <ul className="project-highlights">
                      {project.highlights.map((h, i) => (
                        <li key={i}>
                          <CheckCircle size={14} className="text-pink" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technology Pills */}
                  <div className="project-tech-pills">
                    {project.tech.map((tName) => (
                      <span key={tName} className="project-tech-pill">
                        <TechIcon name={tName} size={14} />
                        <span>{tName}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions Footer */}
                <div className="project-card-footer">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-link"
                    title="View Source on GitHub"
                  >
                    <GithubIcon size={17} />
                    <span>Source Code</span>
                  </a>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link primary"
                      title="View Live API / Demo"
                    >
                      <span>API Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="project-action-note">
                      <span>Blueprints &amp; Config</span>
                    </span>
                  )}
                </div>
              </TiltCard>
            ))}
          </div>
        )}

        {/* Note on editable placeholders */}
        <div className="projects-note-footer">
          <CupcakeIcon size={20} />
          <span>
            Have a new project to showcase? You can add or edit projects simply inside <code>src/data/portfolio.js</code>!
          </span>
        </div>
      </div>
    </section>
  );
};
