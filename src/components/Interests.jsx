import React from "react";
import { interestsAndHobbies } from "../data/portfolio";
import { TiltCard } from "./TiltCard";
import { CupcakeIcon, FrostingSwirl, MacaronIcon, DonutIcon } from "./DessertIcons";
import { Server, Gamepad2, Cloud, Sparkles, Heart } from "lucide-react";

export const Interests = () => {
  const getInterestIcon = (iconName, accent) => {
    switch (iconName) {
      case "server":
        return <Server size={32} className={`text-${accent}`} />;
      case "gamepad":
        return <Gamepad2 size={32} className={`text-${accent}`} />;
      case "cloud":
        return <Cloud size={32} className={`text-${accent}`} />;
      default:
        return <Sparkles size={32} className={`text-${accent}`} />;
    }
  };

  const getDessertArt = (id) => {
    switch (id) {
      case "backend-arch":
        return <CupcakeIcon size={44} className="interest-dessert-svg" />;
      case "gaming":
        return <MacaronIcon size={44} className="interest-dessert-svg" />;
      case "ai-cloud":
        return <DonutIcon size={44} className="interest-dessert-svg" />;
      default:
        return <CupcakeIcon size={44} className="interest-dessert-svg" />;
    }
  };

  return (
    <section className="interests-section section-padding" id="interests">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <Heart size={18} />
            <span>Passions &amp; Recreation</span>
          </div>
          <h2 className="section-title">Beyond the Code</h2>
          <div className="title-underline">
            <span className="line" />
            <FrostingSwirl size={20} className="underline-swirl" />
            <span className="line" />
          </div>
          <p className="section-subtitle">
            What fuels my creativity, curiosity, and drive outside the compiler.
          </p>
        </div>

        {/* 3 Interest Cards */}
        <div className="interests-grid">
          {interestsAndHobbies.map((item) => (
            <TiltCard
              key={item.id}
              className={`interest-card interest-${item.accent}`}
              maxTilt={7}
            >
              {/* Card Top Art Bar */}
              <div className="interest-card-top">
                <div className="interest-icon-box">
                  {getInterestIcon(item.icon, item.accent)}
                </div>
                <div className="interest-dessert-mascot">
                  {getDessertArt(item.id)}
                </div>
              </div>

              {/* Tag & Title */}
              <div className="interest-card-content">
                <span className={`interest-badge badge-${item.accent}`}>
                  {item.tag}
                </span>
                <h3 className="interest-title">{item.title}</h3>
                <h4 className="interest-category">{item.category}</h4>
                <p className="interest-summary">{item.summary}</p>
                <p className="interest-detail">{item.detail}</p>
              </div>

              {/* Dessert Flavor Quote */}
              <div className="interest-flavor-pill">
                <span className="flavor-icon">🍰</span>
                <span className="flavor-text">{item.dessertTheme}</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
