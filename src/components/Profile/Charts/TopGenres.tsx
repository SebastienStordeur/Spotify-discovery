import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const TopGenres = ({ data }: { data: any[] }) => {
  console.log(data);
  const COLORS = ["#FF0000", "#FFF"];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={300}>
        <Pie data={data} dataKey="count" nameKey="genre" cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label />
        {data.map((entry: any, index: number) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TopGenres;
