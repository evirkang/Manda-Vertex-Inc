export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    shortDescription:
      "We discuss the business problem, users, existing systems and project goals.",
    description:
      "We discuss the business problem, users, existing systems and project goals.",
  },
  {
    number: "02",
    title: "Solution Planning",
    shortDescription:
      "We define the scope, integration requirements, milestones and delivery approach.",
    description:
      "We define the scope, integration requirements, milestones and delivery approach.",
  },
  {
    number: "03",
    title: "Design & Development",
    shortDescription:
      "We create the agreed workflows, interfaces, integrations and application components.",
    description:
      "We create the agreed workflows, interfaces, integrations and application components.",
  },
  {
    number: "04",
    title: "Testing & Refinement",
    shortDescription:
      "We test core scenarios, review feedback and address issues before release.",
    description:
      "We test core scenarios, review feedback and address issues before release.",
  },
  {
    number: "05",
    title: "Launch & Support",
    shortDescription:
      "We coordinate deployment and any separately agreed maintenance or enhancements.",
    description:
      "We coordinate deployment and any separately agreed maintenance or enhancements.",
  },
] as const;

export const deliveryApproachSteps = [
  "Understand the business problem.",
  "Understand existing systems.",
  "Define measurable requirements.",
  "Plan architecture and integrations.",
  "Develop the solution.",
  "Test and refine.",
  "Launch and support.",
] as const;

export const principles = [
  {
    title: "Practical scope",
    description:
      "Requirements reflect how your team works today and where technology can reduce friction.",
  },
  {
    title: "Thoughtful integration",
    description:
      "Connections between tools are planned with security, access and maintainability in mind.",
  },
  {
    title: "Clear communication",
    description:
      "Milestones, decisions and trade-offs are documented so expectations stay aligned.",
  },
  {
    title: "Long-term fit",
    description:
      "Solutions are built to evolve with your operations, not only to meet a single launch date.",
  },
] as const;
