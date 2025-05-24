import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function ArchitectureSection() {
  return (
    <section className="py-8 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  );
}
