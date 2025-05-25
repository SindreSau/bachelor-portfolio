import { Metadata } from 'next';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { PageLayout } from '@/components/ui/page-layout';

export const metadata: Metadata = {
  title: 'System Architecture',
  description:
    'Details about the technical architecture, authentication strategy, and infrastructure decisions that power our system.',
};

export default function ArchitecturePage() {
  const architectureFeatures = [
    {
      title: 'Multi-Repository Architecture',
      description:
        'The student portal and admin dashboard are split into separate repositories, enabling independent deployments, fault isolation, and improved security by design.',
      icon: 'mdi:source-repository-multiple',
    },
    {
      title: 'Cross-Application Communication',
      description:
        'A shared REST API layer with API key authentication handles tasks, file storage, and application state. Real-time content syncing is achieved alongside static generation via Incremental Static Regeneration (ISR).',
      icon: 'mdi:api',
    },
    {
      title: 'Rendering Optimization',
      description:
        'Combines Static Site Generation (SSG) and Incremental Static Regeneration (ISR) for portal speed and SEO, while using Server-Side Rendering (SSR) and Client-Side Rendering (CSR) for dynamic dashboard content. Type-safe server actions handle admin-side database interactions.',
      icon: 'mdi:web',
    },
    {
      title: 'Robust Security Model',
      description:
        'Kinde authentication, API key enforcement, middleware redundancy, a secure Data Access Layer (DAL), and structured logging using Pino ensure a strong security posture.',
      icon: 'mdi:shield-check',
    },
    {
      title: 'Deployment-Ready Infrastructure',
      description:
        'Dockerized services with CI/CD pipelines ensure smooth deployments across environments, minimizing friction when moving to production or changing hosts.',
      icon: 'logos:docker-icon',
    },
  ];

  const techStack = [
    {
      category: 'Core Framework',
      technologies: [
        {
          name: 'Next.js 15',
          description:
            'Full-stack React framework with SSG, CSG, SSR, ISR, and server actions',
          icon: 'logos:nextjs-icon',
        },
        {
          name: 'TypeScript',
          description:
            'End-to-end type safety across frontend, backend, and database',
          icon: 'logos:typescript-icon',
        },
        {
          name: 'React',
          description: 'Component-based UI with hooks and modern patterns',
          icon: 'logos:react',
        },
      ],
    },
    {
      category: 'Database & Backend',
      technologies: [
        {
          name: 'PostgreSQL',
          description:
            'Relational database with a rich feature set and strong community',
          icon: 'logos:postgresql',
        },
        {
          name: 'Prisma',
          description:
            'Type-safe ORM with auto-generated queries, schema migrations, and excellent DX',
          icon: 'simple-icons:prisma',
        },
        {
          name: 'Azure Blob Storage',
          description:
            'Cloud-native object storage for handling user files and documents',
          icon: 'devicon:azure',
        },
      ],
    },
    {
      category: 'Security & Auth',
      technologies: [
        {
          name: 'Kinde',
          description:
            'Enterprise authentication with email + OTP verification',
          icon: 'simple-icons:kinde',
        },
        {
          name: 'Pino',
          description: 'Structured logging for audit trails and monitoring',
          icon: 'mdi:tree',
        },
      ],
    },
    {
      category: 'UI & Styling',
      technologies: [
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS with design system consistency',
          icon: 'logos:tailwindcss-icon',
        },
        {
          name: 'shadcn/ui',
          description: 'Accessible component library with full customization',
          icon: 'simple-icons:shadcnui',
        },
      ],
    },
    {
      category: 'Data & Validation',
      technologies: [
        {
          name: 'Zod',
          description: 'Runtime schema validation and type inference',
          icon: 'simple-icons:zod',
        },
        {
          name: 'React Hook Form',
          description: 'Performance-optimized form handling with validation',
          icon: 'simple-icons:reacthookform',
        },
      ],
    },
    {
      category: 'Testing & Quality',
      technologies: [
        {
          name: 'Jest',
          description: 'Unit testing for server actions and utilities',
          icon: 'logos:jest',
        },
        {
          name: 'Playwright',
          description: 'Cross-browser E2E testing for critical user flows',
          icon: 'logos:playwright',
        },
        {
          name: 'ESLint + Prettier',
          description: 'Code quality enforcement and formatting',
          icon: 'logos:eslint',
        },
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-6 pb-8 px-6 text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            System Architecture
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Our architecture is thoughtfully designed around advanced Next.js
            features, strong security practices, and deployment readiness - all
            considered from day one of development.
          </p>
        </section>

        {/* Architecture Overview */}
        <section className="py-8 px-6 bg-accent/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Architecture Overview
            </h2>
            <div className="bg-white p-6 rounded-lg mb-6">
              <Image
                src="/images/architecture/architecture-diagram.png"
                alt="System Architecture Diagram"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {architectureFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-card text-center w-full sm:w-80 max-w-sm"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Icon
                      icon={feature.icon}
                      className="w-6 h-6 text-primary"
                    />
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Technology Stack
            </h2>

            <div className="space-y-8">
              {techStack.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="p-4 rounded-lg border border-border bg-card text-center w-full sm:w-80 max-w-sm"
                      >
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <Icon
                            icon={tech.icon}
                            className="w-5 h-5 text-primary"
                          />
                          <h4 className="font-semibold">{tech.name}</h4>
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

        {/* Security Architecture */}
        <section className="py-8 px-6 bg-accent/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Security Architecture
            </h2>
            <div className="bg-white p-6 rounded-lg mb-6">
              <Image
                src="/images/architecture/authentication-architecture.png"
                alt="Authentication Architecture Diagram"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
              Dashboard security with Kinde authentication, API key for API
              endpoint security, Next.js middleware + Data Access Layer
              redundancy, and comprehensive audit logging.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="p-6 rounded-lg border border-border bg-card text-center w-full max-w-md">
                <h3 className="text-lg font-semibold mb-3">
                  Authentication Flow
                </h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• Email + OTP verification via Kinde</li>
                  <li>• Invitation-only dashboard access</li>
                  <li>• Server-side session management</li>
                  <li>• Automatic token refresh</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card text-center w-full max-w-md">
                <h3 className="text-lg font-semibold mb-3">Data Protection</h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• API key authentication for endpoints</li>
                  <li>• Structured audit logging with Pino</li>
                  <li>• Focus on GDPR compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
