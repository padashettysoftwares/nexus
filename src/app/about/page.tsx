"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page as the About section is temporarily hidden
    router.replace("/");
  }, [router]);

  return null;
}
