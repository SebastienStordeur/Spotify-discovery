import { Cell, Pie, PieChart, ResponsiveContainer, Legend } from "recharts";

const CustomLegend = ({ data, colors }: { data: any[]; colors: string[] }) => {
  return (
    <ul>
      {data.map((entry, index) => {
        const color = colors[index];
        console.log(color);
        return (
          <li key={`flex items-center legend-${index}`} className="relative">
            <span className="absolute w-2 h-2 top-2" style={{ backgroundColor: colors[index] }} />
            <span className="ml-4" style={{ color: colors[index] }}>
              {entry.genre}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

const TopGenres = ({ data }: { data: any[] }) => {
  const COLORS = ["#FF0000", "#FFF555", "#999DDD", "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#55555", "#333485"];

  return (
    <ResponsiveContainer width="50%" height="40%">
      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="count" nameKey="genre" cx="50%" cy="50%" outerRadius={80} label>
          {data.map((_, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend content={<CustomLegend data={data} colors={COLORS} />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TopGenres;
