import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';

const data = [
  { subject: 'Python/SQL', A: 120, fullMark: 150 },
  { subject: 'ML/Stats', A: 110, fullMark: 150 },
  { subject: 'GenAI/LLM', A: 130, fullMark: 150 },
  { subject: 'MLOps/AWS', A: 100, fullMark: 150 },
  { subject: 'Big Data', A: 90, fullMark: 150 },
  { subject: 'Visualization', A: 110, fullMark: 150 },
];

const SkillChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
          <Radar
            name="Sandeepteja"
            dataKey="A"
            stroke="#2dd4bf"
            strokeWidth={2}
            fill="#2dd4bf"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillChart;
