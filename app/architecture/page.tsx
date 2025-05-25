import { Metadata } from 'next';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Card } from '@/components/ui/card';
import { PageLayout } from '@/components/ui/page-layout';

export const metadata: Metadata = {
  title: 'System Architecture',
  description:
    'Explore the technical architecture, authentication strategy, and infrastructure decisions that power our multi-repository application management system.',
};

export default function ArchitecturePage() {
  const architectureFeatures = [
    {
      title: 'Multi-Repository Architecture',
      description:
        'Two distinct Next.js applications: a student-facing portal and an administrative dashboard. This separation ensures high availability and different security requirements for each audience.',
      icon: 'mdi:source-repository-multiple',
    },
    {
      title: 'API Communication Layer',
      description:
        'REST endpoints (/api/tasks, /api/applications, /api/files) with /api/revalidate for content updates and cross-application communication.',
      icon: 'mdi:api',
    },
    {
      title: 'Rendering Strategies',
      description:
        'Portal uses Static Site Generation (SSG) with Incremental Static Regeneration (ISR), while dashboard employs Server-Side Rendering (SSR) for dynamic content.',
      icon: 'mdi:web',
    },
    {
      title: 'Type Safety',
      description:
        'Next.js server actions for database operations provide complete type safety and eliminate separate API endpoints for CRUD operations.',
      icon: 'mdi:shield-check',
    },
    {
      title: 'Containerized Deployment',
      description:
        'Docker containerization ensures consistency from development through production deployment on Azure.',
      icon: 'logos:docker-icon',
    },
  ];

  const securityFeatures = [
    {
      title: 'Multi-Layered Authentication',
      description:
        'Kinde as Authentication-as-a-Service provider with email + one-time password verification.',
      icon: 'mdi:account-multiple-check',
    },
    {
      title: 'API Protection',
      description:
        'Secret keys stored securely on server side with protected endpoints preventing unauthorized submissions.',
      icon: 'mdi:key-variant',
    },
    {
      title: 'Middleware + Data Access Layer',
      description:
        'Next.js middleware for redirects and dedicated DAL for database-level permission validation - critical for security redundancy.',
      icon: 'mdi:shield-lock',
    },
    {
      title: 'Comprehensive Logging',
      description:
        'Structured JSON logging with Pino captures all user actions and details for full traceability.',
      icon: 'mdi:file-document-outline',
    },
    {
      title: 'Invitation-Only Access',
      description:
        'Dashboard features invitation-only access control with explicit authentication checks in server actions.',
      icon: 'mdi:account-key',
    },
  ];

  const techStack = [
    {
      category: 'Frontend & Framework',
      technologies: [
        {
          name: 'Next.js 15',
          description:
            'Full-stack React framework providing server-side rendering, static generation, and built-in API routes',
          icon: 'logos:nextjs-icon',
        },
        {
          name: 'React',
          description:
            'Component-based architecture for building interactive user interfaces with reusable, maintainable code',
          icon: 'logos:react',
        },
        {
          name: 'TypeScript',
          description:
            'Static type checking to catch errors early and improve code reliability across the entire stack',
          icon: 'logos:typescript-icon',
        },
      ],
    },
    {
      category: 'Styling & UI',
      technologies: [
        {
          name: 'Tailwind CSS',
          description:
            'Utility-first CSS framework enabling rapid, consistent styling with automatic purging of unused styles',
          icon: 'logos:tailwindcss-icon',
        },
        {
          name: 'shadcn/ui',
          description:
            'High-quality, accessible React components that integrate seamlessly with our stack while remaining fully customizable',
          icon: 'simple-icons:shadcnui',
        },
        {
          name: 'Lucide React',
          description:
            'Beautiful, consistent icon library for enhanced user interface clarity',
          icon: 'simple-icons:lucide',
        },
      ],
    },
    {
      category: 'Database & ORM',
      technologies: [
        {
          name: 'PostgreSQL',
          description:
            'Robust relational database perfect for our well-defined schema with clear entity relationships',
          icon: 'logos:postgresql',
        },
        {
          name: 'Prisma',
          description:
            'Type-safe ORM providing intuitive database queries, automatic migrations, and excellent developer experience',
          icon: 'simple-icons:prisma',
        },
      ],
    },
    {
      category: 'Authentication & Security',
      technologies: [
        {
          name: 'Kinde',
          description:
            'Authentication-as-a-Service provider offering enterprise-grade security with email + OTP within a free tier',
          icon: 'simple-icons:kinde',
        },
        {
          name: 'Pino',
          description:
            'Structured JSON logging library for comprehensive audit trails and debugging capabilities',
          icon: 'mdi:tree',
        },
      ],
    },
    {
      category: 'Validation & Data Handling',
      technologies: [
        {
          name: 'Zod',
          description:
            'Runtime schema validation ensuring data integrity from user inputs and API responses',
          icon: 'simple-icons:zod',
        },
        {
          name: 'React Hook Form',
          description:
            'Performant form library with built-in validation and excellent user experience',
          icon: 'simple-icons:reacthookform',
        },
        {
          name: 'TipTap',
          description:
            'Rich text editor providing formatted content creation for cover letters and task descriptions',
          icon: 'simple-icons:tiptap',
        },
      ],
    },
    {
      category: 'File Storage & Infrastructure',
      technologies: [
        {
          name: 'Azure Blob Storage',
          description:
            'Scalable cloud storage for user-uploaded documents with secure access patterns',
          icon: 'devicon:azure',
        },
        {
          name: 'Docker',
          description:
            'Containerization ensuring consistent environments from development to production',
          icon: 'logos:docker-icon',
        },
        {
          name: 'Azurite',
          description:
            'Local Azure Blob Storage emulator for development environment consistency',
          icon: 'devicon:azure',
        },
      ],
    },
    {
      category: 'Testing & Quality Assurance',
      technologies: [
        {
          name: 'Jest',
          description:
            'Comprehensive unit testing framework for server actions and utility functions',
          icon: 'logos:jest',
        },
        {
          name: 'Playwright',
          description:
            'End-to-end testing across multiple browsers ensuring reliable user journeys',
          icon: 'logos:playwright',
        },
        {
          name: 'ESLint',
          description:
            'Code linting to maintain consistent coding standards and catch potential issues',
          icon: 'logos:eslint',
        },
        {
          name: 'Prettier',
          description:
            'Automatic code formatting for consistent style across the entire codebase',
          icon: 'logos:prettier',
        },
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-4 md:pt-12 pb-8 px-6 text-center bg-background text-foreground">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            System Architecture
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Technical architecture, authentication strategy, and infrastructure
            decisions that power our multi-repository application management
            system.
          </p>
        </section>

        {/* Architecture Overview */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <Card heading="Project Architecture Overview" className="mb-12">
              <div className="bg-white p-6 rounded-lg mb-6">
                <Image
                  src="/images/architecture/architecture-diagram.png"
                  alt="System Architecture Diagram"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-muted-foreground text-justify mb-4">
                Our solution leverages a multi-repository architecture with two
                distinct Next.js applications: a student-facing application
                portal and an administrative dashboard. This separation ensures
                high availability while allowing different security requirements
                for each audience.
              </p>
              <p className="text-muted-foreground text-justify">
                The applications communicate through an API layer with proper
                authentication. The entire system is containerized with Docker,
                ensuring consistency from development through production
                deployment on Azure.
              </p>
            </Card>

            {/* Architecture Features */}
            <h2 className="text-3xl font-bold text-center mb-12">
              Architecture Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {architectureFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Icon
                      icon={feature.icon}
                      className="w-8 h-8 text-primary"
                    />
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-justify">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-8 px-6 bg-accent/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-12">
              Modern, production-ready technology stack chosen for
              maintainability, performance, and industry relevance.
            </p>

            <div className="space-y-12">
              {techStack.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="p-6 rounded-lg border border-border bg-card"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Icon
                            icon={tech.icon}
                            className="w-6 h-6 text-primary"
                          />
                          <h4 className="text-lg font-semibold">{tech.name}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {tech.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication Section */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <Card
              heading="Secure Authentication & API Protection"
              className="mb-12"
            >
              <div className="bg-white p-6 rounded-lg mb-6">
                <Image
                  src="/images/architecture/authentication-architecture.png"
                  alt="Authentication Architecture Diagram"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-muted-foreground text-justify mb-4">
                Security was paramount given the sensitive student data
                involved. We implemented a multi-layered authentication strategy
                using Kinde as our Authentication-as-a-Service provider,
                featuring email + one-time password verification.
              </p>
              <p className="text-muted-foreground text-justify">
                Our security architecture operates on multiple levels with both
                Next.js middleware and a dedicated Data Access Layer (DAL) - a
                critical decision validated when a Next.js middleware
                vulnerability was discovered mid-project.
              </p>
            </Card>

            {/* Security Features */}
            <h2 className="text-3xl font-bold text-center mb-12">
              Security Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Icon
                      icon={feature.icon}
                      className="w-8 h-8 text-primary"
                    />
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-justify">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Implementation Details */}
        <section className="py-8 px-6 bg-accent/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Technical Implementation
            </h2>

            <div className="space-y-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Icon
                    icon="mdi:database-sync"
                    className="w-8 h-8 text-primary"
                  />
                  <h3 className="text-xl font-bold">Database Operations</h3>
                </div>
                <p className="text-muted-foreground text-justify">
                  We maximize Next.js server actions for database operations
                  within the dashboard, providing full-stack type safety and
                  eliminating the need for separate API endpoints for CRUD
                  operations. For cross-application communication, we use
                  traditional API routes with proper authentication.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Icon icon="mdi:sync" className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">Content Synchronization</h3>
                </div>
                <p className="text-muted-foreground text-justify">
                  The dashboard exposes REST endpoints that the portal consumes,
                  while a /api/revalidate endpoint on the portal enables the
                  dashboard to trigger content updates. We leverage Next.js's
                  full spectrum of rendering strategies for optimal performance.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Icon icon="mdi:security" className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">Security Validation</h3>
                </div>
                <p className="text-muted-foreground text-justify">
                  The server actions within the dashboard include explicit
                  authentication checks, ensuring security even if middleware is
                  bypassed. All user actions are logged with structured JSON
                  logging using Pino, capturing user details for full
                  traceability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
