"use client"; // Add this line to make the component a Client Component
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`uppercase tracking-widest text-[13px] ${isActive ? 'text-blue' : 'text-black'}`}>
            {children}
        </Link>
    );
};

export default NavLink;