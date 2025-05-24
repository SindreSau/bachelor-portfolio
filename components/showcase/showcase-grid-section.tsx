import Link from 'next/link';
import Image from 'next/image';
import { AvatarImage } from '@/components/ui/avatar-image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ShowcaseGridSectionProps {
  className?: string;
}

export function ShowcaseGridSection({ className }: ShowcaseGridSectionProps) {
  return (
    <section className={cn('py-8 px-6 bg-background', className)}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team Section */}
          <Link href="/team" className="block group">
            <Card
              heading="Our Team"
              description="Meet the three Information Technology students from OsloMet who developed this comprehensive application management system."
              className="transition-all duration-300 group-hover:bg-accent/50"
            >
              {/* Mobile: Triangle layout */}
              <div className="flex justify-center mb-4 md:hidden">
                <div className="flex flex-col items-center space-y-4">
                  {/* Top member */}
                  <AvatarImage
                    src="/images/team/Sindre Sauarlia.jpg"
                    alt="Sindre Sauarlia"
                    size="md"
                  />
                  {/* Bottom two members */}
                  <div className="flex space-x-8">
                    <AvatarImage
                      src="/images/team/Adne Longva.jpeg"
                      alt="Ådne Nilsen Longva"
                      size="md"
                    />
                    <AvatarImage
                      src="/images/team/Alex McCorkle .jpeg"
                      alt="Alex McCorkle"
                      size="md"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop: Horizontal layout */}
              <div className="hidden md:flex justify-center space-x-12 mb-4">
                <div className="text-center">
                  <AvatarImage
                    src="/images/team/Sindre Sauarlia.jpg"
                    alt="Sindre Sauarlia"
                    size="lg"
                    className="mx-auto mb-3"
                  />
                  <p className="text-sm font-medium text-foreground">Sindre</p>
                </div>
                <div className="text-center">
                  <AvatarImage
                    src="/images/team/Adne Longva.jpeg"
                    alt="Ådne Nilsen Longva"
                    size="lg"
                    className="mx-auto mb-3"
                  />
                  <p className="text-sm font-medium text-foreground">Ådne</p>
                </div>
                <div className="text-center">
                  <AvatarImage
                    src="/images/team/Alex McCorkle .jpeg"
                    alt="Alex McCorkle"
                    size="lg"
                    className="mx-auto mb-3"
                  />
                  <p className="text-sm font-medium text-foreground">Alex</p>
                </div>
              </div>
            </Card>
          </Link>

          {/* Architecture Section */}
          <Link href="/architecture" className="block group">
            <Card
              heading="System Architecture"
              description="Explore the technical architecture, system design patterns, and infrastructure decisions that power the application management platform."
              className="transition-all duration-300 group-hover:bg-accent/50"
            >
              <div className="flex justify-center mb-4">
                <div className="w-full max-w-lg">
                  <Image
                    src="/images/architecture/architecture-diagram.png"
                    alt="System Architecture Diagram"
                    width={600}
                    height={400}
                    className="w-full h-full rounded-lg border border-border"
                  />
                </div>
              </div>
            </Card>
          </Link>

          {/* Bottom Row - Dashboard and Portal with Synchronized Heights */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Admin Dashboard Section */}
            <Link href="/admin-dashboard" className="block group">
              <Card
                heading="Admin Dashboard"
                description="A comprehensive administrative interface for managing applications, reviewing submissions, and tracking the entire process."
                className="transition-all duration-300 group-hover:bg-accent/50 h-full"
              >
                <div className="p-4 rounded-lg">
                  <div className="aspect-[18/12]">
                    <Image
                      src="/images/admin_dashboard/dashboard-application-table-view.png"
                      alt="Admin Dashboard Screenshot"
                      width={1000}
                      height={600}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </Card>
            </Link>

            {/* Application Portal Section */}
            <Link href="/application-portal" className="block group">
              <Card
                heading="Application Portal"
                description="An intuitive and accessible student-facing portal for submitting thesis applications, uploading documents, and tracking application status."
                className="transition-all duration-300 group-hover:bg-accent/50 h-full"
              >
                <div className="p-4 rounded-lg">
                  <div className="aspect-[18/12]">
                    <Image
                      src="/images/application_portal/application-form.png"
                      alt="Application Portal Screenshot"
                      width={1000}
                      height={600}
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
