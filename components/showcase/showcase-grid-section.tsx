'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AvatarImage } from '@/components/ui/avatar-image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ShowcaseGridSectionProps {
  className?: string;
}

export function ShowcaseGridSection({ className }: ShowcaseGridSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (sectionRef.current && cardsRef.current) {
      const cards = gsap.utils.toArray('.showcase-card');

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.05,
      });

      tl.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
        },
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn('py-8 px-6 bg-background', className)}
    >
      <div className="max-w-7xl mx-auto">
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/team"
            className="block group showcase-card"
            style={{ opacity: 0 }}
          >
            <Card
              heading="The Team"
              description="Meet the three IT students from OsloMet behind the system"
              className="transition-all duration-300 group-hover:bg-card-hover  flex flex-col justify-between"
            >
              <div className="flex flex-col items-center space-y-4 lg:flex-row lg:justify-center lg:justify-items-center h-full lg:space-y-0 lg:space-x-12 mb-4">
                <div className="text-center">
                  <AvatarImage
                    src="/images/team/Sindre Sauarlia.jpg"
                    alt="Sindre Sauarlia"
                    size="lg"
                    className="mx-auto mb-3 md:size-lg"
                  />
                  <p className="text-sm font-medium text-foreground hidden md:block">
                    Sindre
                  </p>
                </div>

                <div className="flex space-x-8 md:space-x-12">
                  <div className="text-center">
                    <AvatarImage
                      src="/images/team/Adne Longva.jpeg"
                      alt="Ådne Nilsen Longva"
                      size="lg"
                      className="mx-auto mb-3 md:size-lg"
                    />
                    <p className="text-sm font-medium text-foreground hidden md:block">
                      Ådne
                    </p>
                  </div>
                  <div className="text-center">
                    <AvatarImage
                      src="/images/team/Alex McCorkle .jpeg"
                      alt="Alex McCorkle"
                      size="lg"
                      className="mx-auto mb-3 md:size-lg"
                    />
                    <p className="text-sm font-medium text-foreground hidden md:block">
                      Alex
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          <Link
            href="/architecture"
            className="block group showcase-card"
            style={{ opacity: 0 }}
          >
            <Card
              heading="System Architecture"
              description="Explore the technical architecture, system design patterns, and infrastructure decisions that power the application management platform."
              className="transition-all duration-300 group-hover:bg-card-hover  flex flex-col justify-between"
            >
              <div className="flex justify-center mb-4">
                <div className="w-full max-w-lg">
                  <Image
                    src="/images/architecture/architecture-diagram.png"
                    alt="System Architecture Diagram"
                    width={600}
                    height={400}
                    quality={30}
                    loading="lazy"
                    className="w-full h-full rounded-lg border border-border"
                  />
                </div>
              </div>
            </Card>
          </Link>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/admin-dashboard"
              className="block group showcase-card"
              style={{ opacity: 0 }}
            >
              <Card
                heading="Admin Dashboard"
                description="A comprehensive administrative interface for managing applications, reviewing submissions, and tracking the entire process."
                className="transition-all duration-300 group-hover:bg-card-hover h-full"
              >
                <div className="p-4 rounded-lg">
                  <div className="aspect-[18/12]">
                    <Image
                      src="/images/admin_dashboard/dashboard-application-table-view.png"
                      alt="Admin Dashboard Screenshot"
                      width={1000}
                      height={600}
                      quality={30}
                      loading="lazy"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </Card>
            </Link>

            <Link
              href="/application-portal"
              className="block group showcase-card"
              style={{ opacity: 0 }}
            >
              <Card
                heading="Application Portal"
                description="An intuitive and accessible student-facing portal for submitting thesis applications, uploading documents, and tracking application status."
                className="transition-all duration-300 group-hover:bg-card-hover h-full"
              >
                <div className="p-4 rounded-lg">
                  <div className="aspect-[18/12]">
                    <Image
                      src="/images/application_portal/application-form.png"
                      alt="Application Portal Screenshot"
                      width={1000}
                      height={600}
                      quality={30}
                      loading="lazy"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
