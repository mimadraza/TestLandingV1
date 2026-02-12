const plans = [
  {
    id: 1,
    name: "Starter",
    price: 19,
    description: "Perfect for individuals and small teams.",
    features: [
      "Up to 10 projects",
      "10 AI tasks per month",
      "Basic analytics",
      "Community support"
    ]
  },
  {
    id: 2,
    name: "Professional",
    price: 49,
    description: "Designed for growing teams and startups.",
    features: [
      "Unlimited AI tasks",
      "API access",
      "Priority support",
      "Advanced analytics"
    ]
  },
  {
    id: 3,
    name: "Enterprise",
    price: 149,
    description: "For large organizations with advanced needs.",
    features: [
      "Custom AI models",
      "Dedicated account manager",
      "Private API",
      "SLA uptime guarantee"
    ]
  }
];

function Pricing() {
  return (
    <div className="page-container">
      <h1>Pricing Plans</h1>
      <p className="page-subtitle">
        Choose the right plan for your team and scale confidently.
      </p>

      <div className="pricing-grid">
        {plans.map(plan => (
          <div key={plan.id} className="pricing-card">
            <h3>{plan.name}</h3>
            <h2>${plan.price}/month</h2>
            <p>{plan.description}</p>

            <ul>
              {plan.features.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>

            <button className="primary-btn">Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
