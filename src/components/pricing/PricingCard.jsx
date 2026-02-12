import React from "react";
import Button from "../ui/Button";

function PricingCard({ title, price, features, highlighted }) {
  return (
    <div className={`pricing-card ${highlighted ? "highlight" : ""}`}>
      <h4>{title}</h4>
      <h2>
        ${price}
        <span>/month</span>
      </h2>

      <ul>
        {features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>

      <Button text="Get Started" />
    </div>
  );
}

export default PricingCard;
