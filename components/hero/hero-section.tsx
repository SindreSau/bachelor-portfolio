'use client';

import { TechIconCard } from '@/components/ui/tech-icon-card';
import { technologies } from '@/config/technologies';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const introParagraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const techIconsContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const elementsToAnimate = [
      titleRef.current,
      subtitleRef.current,
      introParagraphRef.current,
      buttonRef.current,
    ];

    // Ensure all main elements and the tech icons container are present
    if (elementsToAnimate.every((el) => el) && techIconsContainerRef.current) {
      const techIcons = gsap.utils.toArray('.tech-icon-for-animation');
      if (techIcons.length > 0) {
        gsap.set(techIcons, { opacity: 0, y: 20 });
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0 },
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.5',
        )
        .fromTo(
          introParagraphRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.45',
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.45',
        );

      // Animate tech icons
      if (techIcons.length > 0) {
        tl.to(
          techIcons,
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 },
          '-=0.4',
        );
      }
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex pt-32 flex-col items-center justify-center gap-4 bg-background px-4 text-center md:px-6"
    >
      <div className="space-y-10">
        <div className="space-y-4">
          <h1
            ref={titleRef}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl opacity-0"
          >
            Streamlining Accenture&apos;s Bachelor Thesis Application Process
          </h1>
          <p
            ref={subtitleRef}
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl opacity-0"
          >
            We aimed to simplify <strong>Accenture</strong>&apos;s bachelor
            project application process by developing a user-friendly student
            portal paired with an administrative dashboard. This combination
            modernizes the workflow, reduces manual tasks, and ensures GDPR
            compliance.
          </p>
          <p
            ref={introParagraphRef}
            className="md:text-lg text-muted-foreground max-w-3xl mx-auto mb-4 opacity-0"
          >
            For a quick introduction, feel free to watch a{' '}
            <Link className="link" href="/video-overview">
              video overview
            </Link>{' '}
            of the main user flows, or learn more about the project by exploring
            the cards below.
          </p>
        </div>
        <div ref={buttonRef} className="opacity-0">
          <Link
            href="/video-overview"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-fit"
          >
            <Icon icon="mdi:play-circle" className="mr-2 h-4 w-4" />
            Watch Video Overview
          </Link>
        </div>
      </div>
      <div
        ref={techIconsContainerRef}
        className="flex flex-wrap justify-center gap-4 items-center pt-8"
      >
        {Object.values(technologies).map((tech) => (
          <TechIconCard
            key={tech.name}
            icon={tech.icon}
            name={tech.name}
            className="tech-icon-for-animation opacity-0"
          />
        ))}
      </div>
    </section>
  );
}
