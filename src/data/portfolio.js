/**
 * =========================================================================
 * PORTFOLIO CONFIGURATION - PARMESHWAR SHINDE
 * "Code & Cupcakes" Theme
 * =========================================================================
 * You can customize all your personal details, links, photo path, tech stack,
 * and projects here in one single place!
 */

export const personalInfo = {
  name: "Parmeshwar Shinde",
  shortName: "Parmeshwar",
  initials: "PS.",
  role: "Aspiring Backend Engineer",
  education: "BE Computer Engineering Student",
  college: "Trinity Academy of Engineering, Pune",
  tagline: "Backend Engineer in the Making. Software Builder by Passion.",
  bio: "I'm Parmeshwar Shinde, a BE Computer Engineering student at Trinity Academy of Engineering, Pune. I'm passionate about backend engineering and enjoy turning ideas into working software. I'm exploring AI/ML, cloud computing, DevOps, and Kubernetes while continuously improving my development skills.",
  
  // PERSONAL PHOTO:
  // Configured to your photo at /your-photo.png
  photoUrl: "/your-photo.png",
  
  // Social links (Editable Placeholders)
  socials: {
    github: "https://github.com/parmeshwar-shinde", // Replace with your GitHub profile
    linkedin: "https://linkedin.com/in/parmeshwar-shinde", // Replace with your LinkedIn profile
    email: "parmeshwar.shinde@example.com", // Replace with your personal email
    location: "Pune, Maharashtra, India",
    collegeUrl: "https://kjei.edu.in/tae/" // Trinity Academy of Engineering, Pune
  }
};

/**
 * About Section Highlights
 */
export const aboutPillars = [
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Architecting resilient APIs, clean modular microservices, concurrent workers, and efficient database interactions with Java and Golang.",
    iconType: "code",
    accent: "pink",
    badge: "Core Focus"
  },
  {
    id: "cloud-devops",
    title: "Exploring AI/ML & Cloud",
    description: "Diving into containerization, Kubernetes orchestration, scalable cloud primitives, and machine learning pipelines to solve real-world problems.",
    iconType: "cloud",
    accent: "lavender",
    badge: "Continuous Learning"
  },
  {
    id: "crafting",
    title: "Building Software",
    description: "Transforming ambitious ideas into reliable, well-documented code with a problem-solving mindset and passion for developer craft.",
    iconType: "cpu",
    accent: "cyan",
    badge: "Builder Mindset"
  }
];

/**
 * Tech Stack
 * Accurate logos, names, categories, and backend highlights.
 * Strict rule: No fake proficiency percentages or progress bars!
 */
export const techStack = [
  {
    name: "Java",
    category: "Language",
    badge: "OOP & JVM",
    description: "Robust enterprise development, object-oriented design, multithreading, and memory management.",
    color: "#f89820",
    slug: "java"
  },
  {
    name: "Spring Boot",
    category: "Framework",
    badge: "REST APIs & Microservices",
    description: "Production-ready backend microservices, dependency injection, Spring Security, and Spring Data.",
    color: "#6db33f",
    slug: "springboot"
  },
  {
    name: "Golang",
    category: "Language",
    badge: "High Concurrency",
    description: "Lightweight goroutines, high-throughput microservices, clean syntax, and low-latency systems.",
    color: "#00add8",
    slug: "golang"
  },
  {
    name: "Apache Kafka",
    category: "Distributed Streaming",
    badge: "Event-Driven",
    description: "High-volume pub/sub event brokers, distributed streaming pipelines, and fault-tolerant queues.",
    color: "#ff8fab",
    slug: "kafka"
  },
  {
    name: "Git",
    category: "Version Control",
    badge: "Branching & History",
    description: "Distributed version control, atomic commits, interactive rebases, and clean branch workflows.",
    color: "#f05032",
    slug: "git"
  },
  {
    name: "GitHub",
    category: "Platform & CI/CD",
    badge: "Collaboration & Actions",
    description: "Code collaboration, pull request reviews, repository management, and automated CI/CD workflows.",
    color: "#c4b5fd",
    slug: "github"
  }
];

/**
 * Beyond the Code (Interests & Hobbies)
 */
export const interestsAndHobbies = [
  {
    id: "backend-arch",
    title: "Backend Engineering",
    category: "Architecture & Systems",
    summary: "Building software and learning backend architecture.",
    detail: "Fascinated by distributed systems, API gateway patterns, caching layers, database indexing, and writing clean, reliable code that scales under heavy load.",
    icon: "server",
    accent: "pink",
    tag: "Primary Discipline",
    dessertTheme: "The Solid Foundation (Like a rich chocolate sponge)"
  },
  {
    id: "gaming",
    title: "Gaming",
    category: "Interactive Experiences",
    summary: "Playing games and enjoying interactive experiences.",
    detail: "Passionate gamer who enjoys immersing in competitive tactical games, expansive open-world narratives, and deconstructing the engineering behind game mechanics and netcode.",
    icon: "gamepad",
    accent: "cyan",
    tag: "Creative Outlet",
    dessertTheme: "Sweet Gaming Fuel (Pastel macarons & coffee)"
  },
  {
    id: "ai-cloud",
    title: "AI, Cloud & DevOps",
    category: "Infrastructure & Intelligence",
    summary: "Exploring AI/ML, cloud infrastructure, and Kubernetes.",
    detail: "Experimenting with cloud native tools, containerizing apps with Docker, deploying clusters on Kubernetes, and integrating modern AI/ML inference into backend workflows.",
    icon: "cloud",
    accent: "lavender",
    tag: "Active Exploration",
    dessertTheme: "Whipped Clouds (Fluffy marshmallow frosting)"
  }
];

/**
 * Featured Projects (Editable Placeholders)
 * Provide genuine backend-focused project architectures.
 * If projects array is empty, the portfolio cleanly falls back to:
 * "Currently building, experimenting, and turning ideas into code."
 */
export const projectsData = [
  {
    id: "project-1",
    title: "Microservices Order Processing Engine",
    subtitle: "High-Throughput Distributed System",
    description: "An event-driven backend system built with Java, Spring Boot, and Apache Kafka. Handles asynchronous order validation, inventory reservation, and payment event dispatching with resilience patterns.",
    tech: ["Java", "Spring Boot", "Apache Kafka", "Docker", "Git"],
    githubUrl: "https://github.com/parmeshwar-shinde/order-processing-engine", // Editable placeholder
    liveUrl: "https://demo.parmeshwar-shinde.dev/api/orders", // Editable placeholder
    status: "Active Development",
    featuredBadge: "Event-Driven",
    highlights: ["Kafka event streaming", "Circuit breaker with Resilience4j", "PostgreSQL transaction integrity"]
  },
  {
    id: "project-2",
    title: "Distributed Task & Cache Worker in Go",
    subtitle: "Concurrent Lightweight Backend",
    description: "A high-performance background job processing engine implemented in Golang. Leverages Go concurrency channels and goroutines for worker pools, Redis for queued task distribution, and REST health endpoints.",
    tech: ["Golang", "Redis", "REST APIs", "Goroutines", "GitHub"],
    githubUrl: "https://github.com/parmeshwar-shinde/go-distributed-worker", // Editable placeholder
    liveUrl: "https://demo.parmeshwar-shinde.dev/api/worker", // Editable placeholder
    status: "Open Source",
    featuredBadge: "High Concurrency",
    highlights: ["Sub-millisecond latency", "Dynamic worker scaling", "Structured logging & metrics"]
  },
  {
    id: "project-3",
    title: "Cloud Infrastructure & Kubernetes Pipeline",
    subtitle: "DevOps & Container Orchestration",
    description: "Automated containerization and deployment blueprints for microservices. Features Docker multi-stage builds, Kubernetes Helm charts, ingress routing, and GitHub Actions CI/CD pipeline automation.",
    tech: ["Kubernetes", "Docker", "DevOps", "GitHub Actions", "Linux"],
    githubUrl: "https://github.com/parmeshwar-shinde/k8s-cloud-blueprints", // Editable placeholder
    liveUrl: null, // No live UI (infra project)
    status: "Experimentation",
    featuredBadge: "Cloud & DevOps",
    highlights: ["Zero-downtime rolling updates", "ConfigMap & Secrets isolation", "CI/CD linting & tests"]
  }
];

export const emptyProjectsMessage = {
  title: "Building in Progress",
  message: "Currently building, experimenting, and turning ideas into code. Check back soon or visit my GitHub for recent repositories."
};
