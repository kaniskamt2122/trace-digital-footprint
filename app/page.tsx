import Link from "next/link";
import { ArrowRight, Eye, LineChart, ShieldCheck, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="hero">
      <div className="hero-inner">
        <div className="eyebrow">DIGITAL FOOTPRINT INTELLIGENCE</div>
        <h1><span className="gradient-text">Understand what the internet knows about you.</span></h1>
        <p>
          TRACE helps you discover your public digital presence, understand what is visible,
          and see how your footprint changes over time.
        </p>
        <div className="hero-actions">
          <Link className="btn" href="/analyze">Analyze My Footprint <ArrowRight size={16} style={{verticalAlign:"middle"}} /></Link>
          <Link className="btn secondary" href="/learn">Learn About Digital Footprints</Link>
        </div>

        <div className="grid grid-3 feature-grid">
          {[
            [Eye, "Discover", "Find the public profiles and presence connected to the identifiers you provide."],
            [LineChart, "Track", "Save scan snapshots so you can compare your digital presence across weeks and months."],
            [ShieldCheck, "Improve", "Understand privacy signals and get practical suggestions for reducing unnecessary exposure."],
          ].map(([Icon, title, text]) => {
            const I = Icon as typeof Eye;
            return <div className="card" key={String(title)}>
              <div className="feature-icon"><I size={20}/></div>
              <h2>{String(title)}</h2>
              <p className="kicker">{String(text)}</p>
            </div>;
          })}
        </div>
        <div className="footer-note">TRACE is currently running in demo mode. No private information is accessed.</div>
      </div>
    </main>
  );
}
