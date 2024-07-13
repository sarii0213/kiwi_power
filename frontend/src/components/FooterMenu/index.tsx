"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const FooterMenu = () => {
  const pathname = usePathname();

  const NAV_ITEMS = [
    { href: "/objectives", name: "ビジョンボード", icon: "interests" },
    { href: "/records", name: "記録", icon: "trending_down" },
    { href: "/settings", name: "設定", icon: "settings" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        {NAV_ITEMS.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex flex-col items-center justify-center px-5 hover:opacity-100 dark:hover:opacity-100 group ${
                pathname === item.href ? "opacity-100" : "opacity-40"
              }`}
            >
              <Image
                src={`/${item.icon}.svg`}
                alt={item.icon}
                width={20}
                height={20}
              />
              <span className="text-sm dark:text-gray-400 font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}