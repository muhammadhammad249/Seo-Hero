import React from 'react';
import { getLinks } from '@/lib/getData';
import { NavbarClient } from './NavbarClient';

export async function Navbar() {
  const links = await getLinks();

  return <NavbarClient links={links} />;
}
