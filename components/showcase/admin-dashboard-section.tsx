import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function AdminDashboardSection() {
  return (
    <Card
      heading="Admin Dashboard"
      description="A comprehensive administrative interface for managing applications, reviewing submissions, and tracking the entire process."
      className="max-w-6xl mx-auto mb-8"
    >
      <div className="bg-white p-4 rounded-lg">
        <Image
          src="/images/admin-dashboard.png"
          alt="Admin Dashboard Screenshot"
          width={1000}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </Card>
  );
}
