"use client";
import { Cell, Pie, PieChart, ResponsiveContainer, Legend } from "recharts";

const CustomLegend = ({ data, colors }: { data: any[]; colors: string[] }) => {
  return (
    <ul>
      {data.map((entry, index) => {
        const formattedEntry = entry.genre.charAt(0).toUpperCase() + entry.genre.slice(1);
        return (
          <li key={`flex items-center legend-${index}`} className="relative">
            <span className="absolute w-2 h-2 top-2" style={{ backgroundColor: colors[index] }} />
            <span className="ml-4 font-semibold text-sm" style={{ color: colors[index] }}>
              {formattedEntry}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

const TopGenres = ({ data }: { data: any[] }) => {
  const COLORS = ["#FF0000", "#FFF555", "#999DDD", "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#258741", "#ffffff"];

  return (
    <div className="flex justify-center w-full h-full relative my-12">
      <ResponsiveContainer width="70%" height={200}>
        <PieChart width={200} height={200}>
          <Pie data={data} dataKey="count" nameKey="genre" cx="50%" cy="50%" outerRadius={80}>
            {data.map((_, index: number) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Legend verticalAlign="top" content={<CustomLegend data={data} colors={COLORS} />} />
    </div>
  );
};

export default TopGenres;
