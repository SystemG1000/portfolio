'use client'
import Image from 'next/image'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import home from '../../../public/assets/iconsHeader/home.svg';
import profile from '../../../public/assets/iconsHeader/user.svg';
import folder from '../../../public/assets/iconsHeader/folder.svg';
import book from '../../../public/assets/iconsHeader/book.svg';
import email from '../../../public/assets/iconsHeader/email.svg';

import '../css/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  const pathname = usePathname() // Obtenha a rota ativa do hook usePathname do next/navigation

  return (
    <html lang="pt-br">
      <body>
        {children}
        <div className={`controls`}>
          <div className={`control ${pathname === '/' ? "active" : ''}`}>
            <Link href={"/"}><Image src={home} alt="home" /></Link>
          </div>
          <div className={`control ${pathname === '/profile' ? "active" : ''}`}>
            <Link href={"/profile"}><Image src={profile} alt="profile" /></Link>
          </div>
          <div className={`control ${pathname === '/folder' ? "active" : ''}`}>
            <Link href={"./folder"}><Image src={folder} alt="folder" /> </Link>
          </div>
          <div className={`control ${pathname === '/news' ? "active" : ''}`}>
            <Link href={"./news"}><Image src={book} alt="book" /> </Link>
          </div>
          <div className={`control ${pathname === '/contact' ? "active" : ''}`}>
            <Link href={"./contact"}><Image src={email} alt="email" /> </Link>
          </div>
        </div>
      </body>
    </html>
  )
}