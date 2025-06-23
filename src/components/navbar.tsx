'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav style={{fontFamily:'SFPro'}} className="flex items-center justify-between px-20 py-4 bg-white">
      <Link href="/" className="flex items-center gap-2">
      <Image
        src="logo2.svg"
        alt="CepteSaha Logo"
        width={32}
        height={32}
        />
        <span className='text-xl font-bold text-slate-900'>CepteSaha</span>
      </Link>
    </nav>
  );
}
