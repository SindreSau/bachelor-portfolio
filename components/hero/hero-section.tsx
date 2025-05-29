import { TechIconCard } from '@/components/ui/tech-icon-card';
import { technologies } from '@/config/technologies';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="pt-12 pb-8 px-6 text-center bg-background text-foreground">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Streamlining Accenture&apos;s Bachelor Thesis Application Process
      </h1>

      {/* <div className="flex items-center justify-center w-fit mx-auto gap-2 p-2 bg-warning/10 rounded-md mb-4">
        <Icon icon="mdi:construction-outline" className="text-warning" />
        <span className="font-medium">Currently under construction</span>
      </div> */}

      <p className=" md:text-lg text-muted-foreground max-w-4xl mx-auto mb-4">
        We aimed to simplify <strong>Accenture</strong>&apos;s bachelor project
        application process by developing a user-friendly student portal paired
        with an administrative dashboard. This combination modernizes the
        workflow, reduces manual tasks, and ensures GDPR compliance.
      </p>
      <p className="md:text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
        For a quick introduction, feel free to watch a{' '}
        <Link className="link" href="/video-overview">
          video overview
        </Link>{' '}
        of the main user flows, or learn more about the project by exploring the
        cards below.
      </p>
      <div className="flex flex-wrap justify-center gap-4 items-center">
        {Object.values(technologies).map((tech) => (
          <TechIconCard key={tech.name} icon={tech.icon} name={tech.name} />
        ))}
      </div>
    </section>
  );
}
