import React from "react";

function FeatureSection({ number, title, description, image, reverse }) {
  // If reverse: text on left, image on right. Otherwise: image left, text right.
  const leftIsText = !!reverse;

  return (
    <div className="timeline-row">
      <div className="timeline-side">
        {leftIsText ? (
          <div className="timeline-text">
            <div className="timeline-kicker">{number}</div>
            <h2>{title}</h2>
            <p>{description}</p>
            <a  className="learn-more">
              Learn More →
            </a>
          </div>
        ) : (
          <div className="timeline-media">
            <img src={image} alt={title} />
          </div>
        )}
      </div>

      <div className="timeline-mid">
        <div className="timeline-dot">{number}</div>
      </div>

      <div className="timeline-side">
        {!leftIsText ? (
          <div className="timeline-text">
            <div className="timeline-kicker">{number}</div>
            <h2>{title}</h2>
            <p>{description}</p>
            <a  className="learn-more">
              Learn More →
            </a>
          </div>
        ) : (
          <div className="timeline-media">
            <img src={image} alt={title} />
          </div>
        )}
      </div>
    </div>
  );
}

export default FeatureSection;
