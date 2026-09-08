"use client";

import { useEffect, useState } from "react";
import TabNav, { views, type View } from "@/components/TabNav";
import HomeView from "@/components/views/HomeView";
import WorkView from "@/components/views/WorkView";
import AboutView from "@/components/views/AboutView";
import ContactView from "@/components/views/ContactView";

const isView = (v: string): v is View => (views as readonly string[]).includes(v);

export default function Home() {
  const [view, setView] = useState<View>("hello");

  /* Keep the URL hash in step so the back button and shared links work. */
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1);
      if (isView(h)) setView(h);
      else if (h === "") setView("hello");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const change = (v: View) => {
    setView(v);
    window.history.pushState(null, "", v === "hello" ? "#" : `#${v}`);
  };

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <TabNav active={view} onChange={change} />

      {/* One view at a time. Each is designed to fit a normal window; the
          auto overflow is only a safety net for short ones, so content is
          never unreachable. */}
      <main className="flex-1 overflow-y-auto">
        <div key={view} className="rise h-full">
          {view === "hello" && <HomeView />}
          {view === "work" && <WorkView />}
          {view === "about" && <AboutView />}
          {view === "contact" && <ContactView />}
        </div>
      </main>
    </div>
  );
}
