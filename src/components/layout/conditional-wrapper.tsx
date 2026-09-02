"use client";

import { usePathname } from "next/navigation";
import { TopBar } from "./top-bar";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { FloatingWidgets } from "./floating-widgets";

export function ConditionalHeader() {
  const pathname = usePathname();
  if (pathname === '/billing') return null;
  return (
    <>
      <TopBar />
      <Navbar />
    </>
  );
}

export function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === '/billing') return null;
  return (
    <>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
