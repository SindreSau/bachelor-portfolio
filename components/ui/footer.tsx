import Link from 'next/link';
import { Globe } from 'lucide-react';
import { Icon } from '@iconify/react';
import { AvatarImage } from '@/components/ui/avatar-image';
import { socials } from '../../config/socials';

interface FooterProfileProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
  socialLinks: {
    portfolio?: string;
    github: string;
    linkedin: string;
  };
}

function FooterProfile({
  name,
  imageSrc,
  imageAlt,
  socialLinks,
}: FooterProfileProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col w-fit items-center space-y-2">
        <div className="flex items-center gap-3">
          <AvatarImage
            src={imageSrc}
            alt={imageAlt}
            size="md"
            borderColor="primary"
            className="ring-2 ring-primary/20"
          />
          <div>
            <h4 className="font-semibold text-foreground text-lg">{name}</h4>
            <p className="text-sm text-muted-foreground">Developer</p>
          </div>
        </div>
        <div className="flex items-start  w-full space-x-4">
          {socialLinks.portfolio && (
            <Link
              href={socialLinks.portfolio}
              className="p-2 rounded-full bg-background hover:bg-accent text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Portfolio"
            >
              <Globe className="w-5 h-5" />
            </Link>
          )}
          <Link
            href={socialLinks.github}
            className="p-2 rounded-full bg-background hover:bg-accent text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <Icon icon="mdi:github" className="w-5 h-5" />
          </Link>
          <Link
            href={socialLinks.linkedin}
            className="p-2 rounded-full bg-background hover:bg-accent text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Icon icon="mdi:linkedin" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <FooterProfile
            name="Sindre"
            imageSrc="/images/team/Sindre Sauarlia.jpg"
            imageAlt="Sindre Sauarlia"
            socialLinks={socials.sindre}
          />

          <FooterProfile
            name="Ådne"
            imageSrc="/images/team/Adne Longva.jpeg"
            imageAlt="Ådne Nilsen Longva"
            socialLinks={socials.adne}
          />

          <FooterProfile
            name="Alex"
            imageSrc="/images/team/Alex McCorkle .jpeg"
            imageAlt="Alex McCorkle"
            socialLinks={socials.alex}
          />
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with Next.js by the OsloMet team
          </p>
        </div>
      </div>
    </footer>
  );
}
