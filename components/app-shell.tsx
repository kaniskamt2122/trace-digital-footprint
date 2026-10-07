"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3, BookOpen, CalendarDays, ChartNoAxesCombined, Clock3, Eye,
  Gauge, GitCompare, Home, Search, Settings, ShieldCheck, Sparkles, Layers3
} from "lucide-react";

const groups = [
  { label: "Overview", items: [
    ["/dashboard","Dashboard",Gauge], ["/trends","Trends",ChartNoAxesCombined],
    ["/monthly","Monthly Analysis",CalendarDays], ["/compare","Compare",GitCompare],
  ]},
  { label: "Explore", items: [
    ["/analyze","Analyze",Search], ["/breakdown","Footprint Breakdown",Layers3],
    ["/privacy","Privacy",ShieldCheck], ["/history","History",Clock3],
  ]},
  { label: "Learn", items: [["/learn","Digital Footprint 101",BookOpen]] },
  { label: "System", items: [["/settings","Settings",Settings]] },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  if (isHome) return <>{children}</>;

  return (
    <div className="shell">
      <aside className="sidebar">
        <Link href="/" className="logo"><span className="logo-mark">T</span> TRACE</Link>
        <nav>
          {groups.map(group => (
            <div key={group.label}>
              <div className="nav-label">{group.label}</div>
              {group.items.map(([href,label,Icon]) => {
                const I = Icon as typeof Home;
                const active = pathname === href;
                return <Link key={String(href)} href={String(href)} className={`nav-link ${active ? "active" : ""}`}>
                  <I className="nav-icon" size={17}/><span>{String(label)}</span>
                </Link>;
              })}
            </div>
          ))}
        </nav>
      </aside>
      <div className="main">
        <header className="topbar">
          <span className="demo-pill">DEMO DATA</span>
          <div className="avatar">M</div>
        </header>
        {children}
      </div>
    </div>
  );
}
