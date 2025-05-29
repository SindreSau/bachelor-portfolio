import { Metadata } from 'next';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { PageLayout } from '@/components/ui/page-layout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'System Architecture',
  description:
    'Details about the technical architecture, authentication strategy, and infrastructure decisions that power our system.',
};

export default function ArchitecturePage() {
  const architectureFeatures = [
    {
      title: 'Two Separate Applications',
      description:
        'We built the student portal and admin dashboard as completely separate projects. This means if one breaks, the other keeps working, and we can update them independently without affecting each other.',
      icon: 'mdi:source-repository-multiple',
    },
    {
      title: 'Communication Between Apps',
      description:
        'The two apps talk to each other through a few REST API endpoints. The student portal can submit applications and the admin dashboard can create new tasks. We use API keys to ensure only requests from our applications are valid.',
      icon: 'mdi:api',
    },
    {
      title: 'Rendering for Performance',
      description: (
        <>
          We ensure performance by pre-building pages that can be prebuilt, and
          only using CSR where necessary. When admins add new tasks, the portal
          can rebuild the page displaying the tasks without rebuilding the
          entire app thanks to{' '}
          <Link
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://nextjs.org/docs/app/guides/incremental-static-regeneration"
          >
            ISR
          </Link>
        </>
      ),
      icon: 'mdi:web',
    },
    {
      title: 'Multiple Security Layers',
      description:
        'We use Kinde for admin login (email + OTP login), API keys to protect our endpoints, and multiple security checks throughout the code. Everything gets logged using Pino for structured monitoring.',
      icon: 'mdi:shield-check',
    },
    {
      title: 'Easy to Deploy Anywhere',
      description:
        'We used Docker containers from day one, ensuring the apps run the same way locally and in production. This would ensure a smooth deployment process to any cloud provider and easy setup of development environments.',
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
            'React framework that lets us build both frontend and backend in one project, with a bunch of performance optimizations.',
          icon: 'logos:nextjs-icon',
        },
        {
          name: 'TypeScript',
          description:
            'Makes our code safer by catching errors before they happen, gives us better autocomplete and ensures easy project takeover.',
          icon: 'logos:typescript-icon',
        },
        {
          name: 'React',
          description: 'Do we even need to explain this one?',
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
            'Reliable database that allows us to store data with complex relationships, like applications, students, and tasks.',
          icon: 'logos:postgresql',
        },
        {
          name: 'Prisma',
          description:
            'Makes database queries type-safe and way easier to write than raw SQL. Auto-generates TypeScript types from our database schema',
          icon: 'simple-icons:prisma',
        },
        {
          name: 'Azure Blob Storage',
          description:
            'File storage for CV and grade documents that students upload',
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
            "Handles user authentication for us, which we believe to be safer than us building it ourselves. All we need is supported within Kinde's free tier.",
          icon: 'arcticons:security',
        },
        {
          name: 'Pino',
          description:
            'Structured logging to ensure good monitoring and debugging in production',
          icon: 'simple-icons:pino',
        },
      ],
    },
    {
      category: 'UI & Styling',
      technologies: [
        {
          name: 'Tailwind CSS',
          description:
            'CSS framework that makes styling fast to write, performant and have full control over the design.',
          icon: 'logos:tailwindcss-icon',
        },
        {
          name: 'shadcn/ui',
          description:
            'Pre-built components that are accessible and look professional out of the box while still being fully customizable.',
          icon: 'simple-icons:shadcnui',
        },
        {
          name: 'TipTap',
          description:
            'Rich text editor that students can use to write their cover letters without loosing expressiveness.',
          icon: 'f7:doc-richtext',
        },
      ],
    },
    {
      category: 'Data & Validation',
      technologies: [
        {
          name: 'Zod',
          description:
            'Validates form data on both frontend and backend at runtime, ensuring data integrity and type safety.',
          icon: 'simple-icons:zod',
        },
        {
          name: 'React Hook Form',
          description:
            'Makes complex forms with file uploads and validation much easier to build and maintain.',
          icon: 'simple-icons:reacthookform',
        },
      ],
    },
    {
      category: 'Testing & Quality',
      technologies: [
        {
          name: 'Jest',
          description:
            'Used for unit tests of all server actions and helper functions.',
          icon: 'logos:jest',
        },
        {
          name: 'Playwright',
          description:
            'Simulates real users clicking through the app to test complete workflows.',
          icon: 'logos:playwright',
        },
        {
          name: 'ESLint + Prettier',
          description:
            'Keeps our code clean and consistently formatted across the team.',
          icon: 'logos:eslint',
        },
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-6 pb-8  text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            System Architecture
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Our architecture is built around modern Next.js features, strong
            security practices, and easy deployment - all planned from the very
            beginning of development.
          </p>
        </section>

        {/* Architecture Overview */}
        <section className="py-8  bg-accent/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Architecture Overview
            </h2>
            <div className="bg-white p-6 rounded-lg mb-6">
              <Image
                src="/images/architecture/architecture-diagram.png"
                alt="System Architecture Diagram"
                width={3290}
                height={1854}
                priority
                quality={40}
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
                    <h3 className="text-base font-semibold">{feature.title}</h3>
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
        <section className="py-8 ">
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
        <section className="py-8  bg-accent/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Security Architecture
            </h2>
            <div className="bg-white p-6 rounded-lg mb-6">
              <Image
                src="/images/architecture/authentication-architecture.png"
                alt="Authentication Architecture Diagram"
                width={3000}
                height={1226}
                loading="lazy"
                quality={30}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
              The admin dashboard is protected with Kinde authentication (email
              + OTP). Our API endpoints use API keys to verify requests come
              from our apps. We also have multiple security checks in the code
              and log everything for audit purposes.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="p-6 rounded-lg border border-border bg-card text-center w-full max-w-md">
                <h3 className="text-lg font-semibold mb-3">
                  Authentication Flow
                </h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• Email + verification code via Kinde</li>
                  <li>• Invitation-only dashboard access</li>
                  <li>• Server-side session management</li>
                  <li>• Automatic token refresh</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card text-center w-full max-w-md">
                <h3 className="text-lg font-semibold mb-3">
                  Endpoint Protection
                </h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• API key authentication for endpoints</li>
                  <li>• Env variable in each application to store API keys</li>
                  <li>• Detailed audit logging with Pino</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
