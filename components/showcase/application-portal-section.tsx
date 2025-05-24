import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function ApplicationPortalSection() {
  return (
    <Card
      heading="Application Portal"
      description="An intuitive and accessible student-facing portal for submitting thesis applications, uploading documents, and tracking application status."
      className="max-w-6xl mx-auto mb-8"
    >
      <div className="bg-white p-4 rounded-lg">
        <Image
          src="/images/application-portal.png"
          alt="Application Portal Screenshot"
          width={1000}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </Card>
  );
}
