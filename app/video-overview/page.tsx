import { PageLayout } from '@/components/ui/page-layout';
import { VideoPlayer } from '@/components/ui/video-player';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Overview',
  description:
    'Watch a video overview of the main user flows in the Accenture Bachelor Application Management System. Including applying for a project, reviewing applications, and managing projects.',
};

const videos = [
  {
    src: '/videos/Bachelor-søknad-compressed.mp4',
    title: 'Bachelor Application Process',
    description:
      'The application portal focuses largely on UX and functionality, while the actual design process needs to be handled by Accenture to match their branding guidelines and visual identity before production.',
  },
  {
    src: '/videos/se-søknad-comp.mp4',
    title: 'Application Review System',
    description:
      'Demonstration of how administrators can review incoming applications, evaluate student qualifications, and make assignment decisions through the management dashboard.',
  },
  {
    src: '/videos/oppdater-oppgaver-comp.mp4',
    title: 'Project Management Features',
    description:
      'The project management dashboard allows administrators to create, update, and delete bachelor projects.',
  },
];

export default function VideoPage() {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Demo Videos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We made some video demos for our bachelor project presentation,
            showcasing the key features and user flows of the system.
          </p>
        </div>

        <div className="space-y-16">
          {videos.map((video, index) => (
            <VideoPlayer
              key={index}
              src={video.src}
              title={video.title}
              description={video.description}
              className="max-w-4xl mx-auto my-6"
              width={1280}
              height={720}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
