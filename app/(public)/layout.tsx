'use client'

import './globals.css'
import styles from "./home.module.css";
import Image from 'next/image'; 
import profile from "../../public/assets/iconsHeader/user.svg";
import home from "../../public/assets/iconsHeader/home.svg";
import folder from "../../public/assets/iconsHeader/folder.svg";
import book from "../../public/assets/iconsHeader/book.svg";
import email from "../../public/assets/iconsHeader/email.svg";
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
  activeRoute: string // Defina o tipo de activeRoute como uma string
}) {

  const pathname = usePathname() // Obtenha a rota ativa do hook usePathname do next/navigation

  return (
    <html lang="en">
      <body>
        {children}
        <div className={`${styles.controls}`}>
          <div className={`${styles.control} ${pathname === '/' ? styles.active : ''}`}>
            <Link href={"/"}><Image src={home} alt="home" /></Link>
          </div>
          <div className={`${styles.control} ${pathname === '/profile' ? styles.active : ''}`}>
            <Link href={"/profile"}><Image src={profile} alt="profile" /></Link>
          </div>
          <div className={`${styles.control} ${pathname === '/folder' ? styles.active : ''}`}>
            <Link href={"./folder"}><Image src={folder} alt="folder" /> </Link>
          </div>
          <div className={`${styles.control} ${pathname === '/news' ? styles.active : ''}`}>
            <Link href={"./news"}><Image src={book} alt="book" /> </Link>
          </div>
          <div className={`${styles.control} ${pathname === '/contact' ? styles.active : ''}`}>
            <Link href={"./contact"}><Image src={email} alt="email" /> </Link>
          </div>
        </div>
      </body>
    </html>
  )
}