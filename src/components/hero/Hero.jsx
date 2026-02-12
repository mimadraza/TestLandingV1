import React from "react";
import Button from "../ui/Button";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Build AI Agents That Work For You</h1>
      <p>
        Create, customize and launch intelligent agents in minutes with our powerful builder.
      </p>
      <Button text="Start Building" />
    </section>
  );
}

export default Hero;
