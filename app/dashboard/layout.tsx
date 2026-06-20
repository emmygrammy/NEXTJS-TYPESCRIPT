import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
   <section>
    <aside className="w-64 h-full bg-gray-200 p-4">
        <h2>Dashboard sidebar</h2>
        <ul>
            <li>
               overview
            </li>
            <li>
                users
            </li>
            <li>
                orders
            </li>
        </ul>

    </aside>
    <div className="mt-4 container bg-yellow-400 max-w-7xl p-4 rounded-md shadow-md">
    {children}
    </div>
   </section>
  );
}
