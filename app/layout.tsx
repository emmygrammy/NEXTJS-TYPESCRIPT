import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>EMMANUEL Next.js Course</title>
      </head>

      <body className="min-h-full flex flex-col">
        {/* header */}
        <header>
          my nav bar
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
