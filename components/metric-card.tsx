import { TrendingDown, TrendingUp } from "lucide-react";

export function MetricCard({ label, value, delta, positive = true }: { label:string; value:string|number; delta:string; positive?:boolean }) {
  return <div className="card metric">
    <div className="metric-top"><span>{label}</span>{positive ? <TrendingUp size={16}/> : <TrendingDown size={16}/>}</div>
    <div className="metric-value">{value}</div>
    <div className={`delta ${positive ? "up" : "down"}`}>{delta}</div>
  </div>;
}
