import Link from 'next/link';
import { Globe } from 'lucide-react';
import { Icon } from '@iconify/react';
import { AvatarImage } from '@/components/ui/avatar-image';
import { Card } from '@/components/ui/card';
import { socials } from '@/config/socials';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Team',
  description:
    'Meet the team behind the Accenture Bachelor Application Management System. We are three Information Technology students from OsloMet who are passionate about developing innovative solutions.',
};

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Alexander Cody McCorkle',
      role: 'Full-Stack Developer',
      image: '/images/team/Alex McCorkle .jpeg',
      socialKey: 'alex',
      description: [
        'Transitioned into IT from having studied psychology',
        'Will start working at SIKT this fall',
      ],
    },
    {
      name: 'Sindre Sauarlia',
      role: 'Full-Stack Developer',
      image: '/images/team/Sindre Sauarlia.jpg',
      socialKey: 'sindre',
      description: [
        'Currently looking for work',
        'Focuses on a broad technical understanding and becoming a full stack developer',
        'Transitioned into IT from a career as a musician',
      ],
    },
    {
      name: 'Ådne Nilsen Longva',
      role: 'Full-Stack Developer',
      image: '/images/team/Adne Longva.jpeg',
      socialKey: 'adne',
      description: ['Will continue his studies with a masters program'],
    },
  ];

  const approaches = [
    {
      title: 'Careful planning',
      description:
        "We used MoSCoW prioritization to categorize features as Must-have, Should-have, Could-have, or Won't-have, focusing on critical functionality first. Our planning included UML diagrams, database modeling, risk assessments, and wireframes validated through user testing before development.",
    },
    {
      title: 'Scrum',
      description:
        'We implemented Scrum practices with two-week sprints, daily stand-ups, and regular retrospectives to maintain alignment and consistent progress throughout the project.',
    },
    {
      title: 'Quality Focus',
      description:
        'Our testing strategy included unit tests for all server actions and end-to-end testing for critical user flows, ensuring reliable and maintainable code.',
    },
    {
      title: 'CI/CD for continuous feedback',
      description:
        'We established a robust CI/CD pipeline connected to our GitHub repository, automatically deploying updates to a hosted demo environment. This approach allowed us to catch deployment issues early while providing stakeholders with 24/7 access to test new features and provide ongoing feedback throughout development.',
    },
    {
      title: 'Exceeding expectations',
      description:
        'Our final delivery surpassed the original project vision. We successfully implemented all Must-have and Should-have requirements as planned for our MVP, allowing time for additional refinements and quality improvements that elevated the user experience beyond initial expectations.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-12 pb-4 px-6 text-center bg-background text-foreground">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">The Team</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 ">
          We are three Information Technology students from OsloMet who all
          really enjoy developing and are passionate about what we are building.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className=""
                contentClassName="flex flex-col text-center justify-between"
              >
                <div>
                  <div className="flex flex-col items-center mb-6">
                    <AvatarImage
                      src={member.image}
                      alt={member.name}
                      size="lg"
                      className="mb-4"
                    />
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-accent-foreground font-medium mb-2">
                      {member.role}
                    </p>
                  </div>
                  <ul className="space-y-4 text-muted-foreground mb-6">
                    {member.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center  space-x-4">
                  {socials[member.socialKey].portfolio && (
                    <Link
                      href={socials[member.socialKey].portfolio!}
                      className="p-2 rounded-full bg-background hover:bg-accent text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Portfolio"
                    >
                      <Globe className="w-5 h-5" />
                    </Link>
                  )}
                  <Link
                    href={socials[member.socialKey].github}
                    className="p-2 rounded-full bg-background hover:bg-accent text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <Icon icon="mdi:github" className="w-5 h-5" />
                  </Link>
                  <Link
                    href={socials[member.socialKey].linkedin}
                    className="p-2 rounded-full bg-background hover:bg-accent text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <Icon icon="mdi:linkedin" className="w-5 h-5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-8 mb-16 md:mb-32 px-6 bg-accent/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="space-y-8">
            {approaches.map((approach, index) => {
              // Define icons for each approach
              const icons = [
                'mdi:clipboard-list-outline', // Careful planning
                'iconoir:agile', // Scrum
                'mdi:shield-check', // Quality Focus
                'mdi:rocket-launch', // CI/CD for continuous feedback
                'mdi:trophy', // Exceeding expectations
              ];

              return (
                <div key={index} className="text-center max-w-xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Icon
                      icon={icons[index]}
                      className="w-7 h-7 text-primary"
                    />
                    <h3 className="text-xl font-bold">{approach.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-justify">
                    {approach.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
