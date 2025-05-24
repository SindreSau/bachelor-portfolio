import Link from 'next/link';
import Image from 'next/image';
import { Globe, Github, Linkedin } from 'lucide-react';
import { AvatarImage } from '@/components/ui/avatar-image';
import { socials } from '../config/socials';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Team Members */}
        <div className="flex flex-col md:flex-row justify-around items-start gap-8">
          {/* Sindre */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <AvatarImage
                src="/images/team/Sindre Sauarlia.jpg"
                alt="Sindre Sauarlia"
                size="sm"
                borderColor="primary"
              />
              <h4 className="font-medium text-foreground">Sindre</h4>
            </div>
            <div className="flex justify-center space-x-3">
              {socials.sindre.portfolio && (
                <Link
                  href={socials.sindre.portfolio}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Portfolio"
                >
                  <Globe className="w-4 h-4" />
                </Link>
              )}
              <Link
                href={socials.sindre.github}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href={socials.sindre.linkedin}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Separator for desktop */}
          <div className="hidden md:block w-px bg-border h-20 self-center"></div>

          {/* Separator for mobile */}
          <hr className="md:hidden w-full border-border" />

          {/* Ådne */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <AvatarImage
                src="/images/team/Adne Longva.jpeg"
                alt="Ådne Nilsen Longva"
                size="sm"
                borderColor="primary"
              />
              <h4 className="font-medium text-foreground">Ådne</h4>
            </div>
            <div className="flex justify-center space-x-3">
              <Link
                href={socials.adne.github}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href={socials.adne.linkedin}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Separator for desktop */}
          <div className="hidden md:block w-px bg-border h-20 self-center"></div>

          {/* Separator for mobile */}
          <hr className="md:hidden w-full border-border" />

          {/* Alex */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <AvatarImage
                src="/images/team/Alex McCorkle .jpeg"
                alt="Alex McCorkle"
                size="sm"
                borderColor="primary"
              />
              <h4 className="font-medium text-foreground">Alex</h4>
            </div>
            <div className="flex justify-center space-x-3">
              {socials.alex.portfolio && (
                <Link
                  href={socials.alex.portfolio}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Portfolio"
                >
                  <Globe className="w-4 h-4" />
                </Link>
              )}
              <Link
                href={socials.alex.github}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href={socials.alex.linkedin}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
