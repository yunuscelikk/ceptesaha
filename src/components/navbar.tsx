'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black shadow-md">
      <Link href="/" className="text-xl font-bold text-green-300">
        CepteSaha
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link href="/hakkimizda" className="text-white-700 hover:text-green-300">
            Hakkımızda
          </Link>
        </li>
        <li>
          <Link href="/ozellikler" className="text-white-700 hover:text-green-300">
            Özellikler
          </Link>
        </li>
        <li>
          <Link href="/iletisim" className="text-white-700 hover:text-green-300">
            İletişim
          </Link>
        </li>
      </ul>
    </nav>
  );
}
