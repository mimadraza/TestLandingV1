const features = [
  {
    id: 1,
    title: "Custom AI Agents",
    description:
      "Create task-specific AI agents tailored to your business processes.",
    bullets: [
      "Natural language configuration",
      "Task chaining & automation",
      "Custom logic rules",
      "Dynamic knowledge sources"
    ]
  },
  {
    id: 2,
    title: "Integrations",
    description:
      "Connect your AI agents to your favorite tools and services.",
    bullets: [
      "Slack integration",
      "Notion sync",
      "Zapier support",
      "REST API support"
    ]
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Monitor performance and optimize agent efficiency in real-time.",
    bullets: [
      "Task completion tracking",
      "Performance metrics",
      "Error monitoring",
      "Usage breakdown"
    ]
  }
];

function Features() {
  return (
    <div className="page-container">
      <h1>Platform Features</h1>
      <p className="page-subtitle">
        Powerful tools designed to help you build, manage, and scale AI agents.
      </p>

      <div className="features-grid">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>

            <ul>
              {feature.bullets.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
