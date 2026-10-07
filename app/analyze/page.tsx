"use client";
import { useState } from "react";
import { CheckCircle2, Search } from "lucide-react";

export default function Analyze() {
  const [scanning,setScanning] = useState(false);
  const [done,setDone] = useState(false);
  const run = () => { setScanning(true); setDone(false); setTimeout(()=>{setScanning(false);setDone(true)},1800); };
  return <main className="content">
    <div className="page-head"><div><div className="eyebrow">DISCOVER</div><h1>Analyze your footprint</h1><p className="subtitle">Enter public identifiers you own. TRACE will use demo data in this version.</p></div></div>
    <div className="card">
      {!scanning && !done && <><div className="form-grid">
        <div className="field"><label>Username / handle</label><input className="input" placeholder="@yourname"/></div>
        <div className="field"><label>GitHub username</label><input className="input" placeholder="yourusername"/></div>
        <div className="field"><label>Website</label><input className="input" placeholder="https://example.com"/></div>
        <div className="field"><label>Public identifier</label><input className="input" placeholder="Optional"/></div>
      </div><div style={{marginTop:18}}><button className="btn" onClick={run}><Search size={16} style={{verticalAlign:"middle"}}/> Start Analysis</button></div></>}
      {scanning && <div className="scan"><div className="scan-ring"/><h2>Analyzing public presence…</h2><p className="muted">Checking public profiles · developer presence · web metadata</p></div>}
      {done && <div className="scan"><CheckCircle2 size={48} color="#6ee7b7"/><h2>Analysis complete</h2><p className="muted">Demo results have been generated. Your dashboard now has a sample snapshot.</p><button className="btn" onClick={()=>setDone(false)}>Run another scan</button></div>}
    </div>
    <div className="callout section"><b>Privacy first.</b><div className="kicker">TRACE is designed for self-auditing public information. It does not access private accounts or bypass authentication.</div></div>
  </main>;
}
