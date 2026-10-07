"use client";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

const data = [
  { name:"Sep 08", score:57, profiles:5, activity:11 },
  { name:"Sep 15", score:61, profiles:6, activity:15 },
  { name:"Sep 22", score:64, profiles:6, activity:17 },
  { name:"Sep 29", score:68, profiles:7, activity:19 },
  { name:"Oct 06", score:72, profiles:8, activity:21 },
];

export function ScoreChart() {
  return <div className="chart-wrap"><ResponsiveContainer width="100%" height="100%">
    <LineChart data={data}><CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false}/>
      <XAxis dataKey="name" stroke="#6f7488" fontSize={11}/><YAxis stroke="#6f7488" fontSize={11}/>
      <Tooltip contentStyle={{background:"#121525",border:"1px solid rgba(255,255,255,.1)",borderRadius:10,color:"#fff"}}/>
      <Line type="monotone" dataKey="score" stroke="#a78bfa" strokeWidth={3} dot={{r:3,fill:"#67e8f9"}}/>
    </LineChart>
  </ResponsiveContainer></div>;
}

export function ActivityChart() {
  return <div className="chart-wrap"><ResponsiveContainer width="100%" height="100%">
    <BarChart data={data}><CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false}/>
      <XAxis dataKey="name" stroke="#6f7488" fontSize={11}/><YAxis stroke="#6f7488" fontSize={11}/>
      <Tooltip contentStyle={{background:"#121525",border:"1px solid rgba(255,255,255,.1)",borderRadius:10,color:"#fff"}}/>
      <Bar dataKey="activity" fill="#67e8f9" radius={[6,6,0,0]}/>
    </BarChart>
  </ResponsiveContainer></div>;
}

export const trendData = data;
