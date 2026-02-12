import React from "react";
import StepCard from "./StepCard";
import "./Steps.css";

function StepsSection() {
  return (
    <section className="steps">
      <StepCard
        number="01"
        title="Start with a Prompt"
        description="Describe what you want your agent to do."
      />
      <StepCard
        number="02"
        title="Adjust & Personalize"
        description="Customize tasks and integrations."
      />
      <StepCard
        number="03"
        title="Launch & Automate"
        description="Deploy your agent and let it run."
      />
    </section>
  );
}

export default StepsSection;
