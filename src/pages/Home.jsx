import React from "react";
import Hero from "../components/hero/Hero";
import StepsSection from "../components/steps/StepsSection";
import PricingSection from "../components/pricing/PricingSection";
import FeatureSection from "../components/ui/FeatureSection";

function Home() {
  const features = [
    {
      id: 1,
      number: "01",
      title: "Start with a Prompt",
      description:
        "Start with a simple prompt describing what you want your agent to do. Our builder interprets your idea and creates the structure for you in seconds.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      id: 2,
      number: "02",
      title: "Adjust and Personalize",
      description:
        "Adjust tasks, actions and integrations. Add personality, rules and data sources to make the agent work exactly the way you want.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      reverse: true
    },
    {
      id: 3,
      number: "03",
      title: "Launch & Automate",
      description:
        "Deploy your agent and let it run. It executes tasks autonomously, reports results, and continues working in the background.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    }
  ];

  return (
    <>
      <Hero />


      {/* 🔽 THIS IS WHERE IT GOES */}
       <div className="timeline">
  {features.map((item) => (
    <FeatureSection
      key={item.id}
      number={item.number}
      title={item.title}
      description={item.description}
      image={`${item.image}?auto=format&fit=crop&w=1200&q=80`}
      reverse={item.reverse}
    />
  ))}
</div>


      {/* 🔼 END */}
    </>
  );
}

export default Home;
