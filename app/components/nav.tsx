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
  return <nav></nav>;
}
