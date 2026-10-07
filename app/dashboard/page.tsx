import { ActivityChart, ScoreChart } from "@/components/charts";
import { MetricCard } from "@/components/metric-card";
import { categories } from "@/lib/demo-data";

export default function Dashboard() {
  return <main className="content">
    <div className="page-head">
      <div><div className="eyebrow">OVERVIEW</div><h1>Your Digital Footprint</h1><p className="subtitle">A snapshot of what is publicly discoverable and how it has changed recently.</p></div>
    </div>
    <div className="grid grid-4">
      <MetricCard label="Public Profiles" value="8" delta="+33% vs last week"/>
      <MetricCard label="Repositories" value="14" delta="+17% vs last week"/>
      <MetricCard label="Public Activity" value="21" delta="+11% vs last week"/>
      <MetricCard label="Web Presence" value="3" delta="Stable" positive={true}/>
    </div>
    <div className="grid grid-2 section">
      <div className="card chart-card"><div className="row"><div><h2>Footprint score</h2><span className="muted">Weekly snapshots</span></div><span className="badge good">+12% this month</span></div><ScoreChart/></div>
      <div className="card chart-card"><div className="row"><div><h2>Public activity</h2><span className="muted">Discoverable activity count</span></div></div><ActivityChart/></div>
    </div>
    <div className="grid grid-2 section">
      <div className="card"><h2>Footprint breakdown</h2>{categories.map(c=><div className="breakdown-row" key={c.name}><div className="breakdown-head"><span>{c.name}</span><b>{c.score}</b></div><div className="progress"><span style={{width:`${c.score}%`}}/></div></div>)}</div>
      <div className="card"><h2>Recent discoveries</h2><div className="list">
        {["Developer profile detected","Website metadata refreshed","Public project activity increased","Old community profile still discoverable"].map((x,i)=><div className="list-item" key={x}><div><h3>{x}</h3><span className="muted">{i+1}–4 days ago</span></div><span className={`badge ${i===3?"warn":"good"}`}>{i===3?"Review":"New"}</span></div>)}
      </div></div>
    </div>
  </main>;
}
