import { TechIconCard } from '@/components/ui/tech-icon-card';
import { technologies } from '@/app/config/technologies';

export function HeroSection() {
  return (
    <section className="pt-12 pb-8 px-6 text-center bg-background text-foreground">
      <h1 className="text-2xl md:text-5xl font-bold mb-4">
        Bachelor Application Management System
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
        A full-stack web application system that streamlined Accenture's
        bachelor thesis application process. Includes a student-facing
        application portal and an administrative dashboard, reducing manual
        processing time and ensuring GDPR compliance.
      </p>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
        Features include real-time document management, collaborative review
        tools, automated email confirmations, and comprehensive accessibility
        support with 100/100 PageSpeed Insights scores.
      </p>
      <div className="flex flex-wrap justify-center gap-4 items-center">
        <span className="text-base text-muted-foreground font-medium mr-2">
          <strong>Tech stack:</strong>
        </span>
        <div className="flex flex-wrap justify-center gap-3">
          <TechIconCard
            icon={technologies.nextjs.icon}
            name={technologies.nextjs.name}
          />
          <TechIconCard
            icon={technologies.typescript.icon}
            name={technologies.typescript.name}
          />
          <TechIconCard
            icon={technologies.postgresql.icon}
            name={technologies.postgresql.name}
          />
          <TechIconCard
            icon={technologies.azureBlobStorage.icon}
            name={technologies.azureBlobStorage.name}
          />
          <TechIconCard
            icon={technologies.docker.icon}
            name={technologies.docker.name}
          />
          <TechIconCard
            icon={technologies.tailwindcss.icon}
            name={technologies.tailwindcss.name}
          />
          <TechIconCard
            icon={technologies.prismaORM.icon}
            name={technologies.prismaORM.name}
          />
        </div>
      </div>
    </section>
  );
}
