import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>EMMANUEL Next.js Course</title>
      </head>

      <body className="min-h-full flex flex-col">
        {/* header */}
        <header>
          my app navbar
          <nav className="flex items-center gap-12 ">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        {/* main */}
        
        <main className="flex-1">
          {children}
        </main>

        {/* footer */}
        <footer>
          my footer
        </footer>
      </body>
    </html>
  );
}
