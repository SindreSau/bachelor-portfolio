import Link from 'next/link';
import { AvatarImage } from '@/components/ui/avatar-image';
import { Card } from '@/components/ui/card';

export function TeamSection() {
  return (
    <section className="py-8 px-6 bg-background">
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
        </div>
      </div>
    </section>
  );
}
