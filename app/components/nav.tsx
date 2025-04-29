import Link from 'next/link';
import { Menu } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/about-us': {
    name: 'About us',
  },
  '/about-project': {
    name: 'About our project',
  },
};

export function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      {' '}
      {/* Removed padding and background/border styles */}
      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavigationMenu title="Navigation Menu">
          <NavigationMenuList>
            {Object.entries(navItems).map(([path, { name }]) => (
              <NavigationMenuItem key={path}>
                <NavigationMenuLink
                  href={path}
                  className={navigationMenuTriggerStyle()}
                >
                  {name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden w-full">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" title="Navigation Menu">
            <nav className="grid gap-4 text-lg font-medium mt-6">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  {name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
