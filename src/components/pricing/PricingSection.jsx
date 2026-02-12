import React from "react";
import PricingCard from "./PricingCard";
import "./Pricing.css";

function PricingSection() {
  return (
    <section className="pricing">
      <h2>Our Pricing Plans</h2>

      <div className="pricing-container">
        <PricingCard
          title="Starter"
          price="19"
          features={[
            "Up to 10 projects",
            "10 AI tasks/month",
            "Basic text generation"
          ]}
        />

        <PricingCard
          title="Professional"
          price="49"
          highlighted
          features={[
            "Unlimited AI tasks",
            "API integration",
            "Priority support"
          ]}
        />

        <PricingCard
          title="Enterprise"
          price="149"
          features={[
            "Custom AI models",
            "Private API",
            "24/7 support"
          ]}
        />
      </div>
    </section>
  );
}

export default PricingSection;
