interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export default function ExperienceCard({ 
  title, 
  company, 
  location, 
  duration, 
  responsibilities 
}: ExperienceCardProps) {
  return (
    <div className="rounded-lg p-6 bg-[#161b22] shadow-[0_10px_25px_#00000080,0_4px_10px_#0000004D]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="font-medium text-[#4fc1ff]">{company}</p>
          <p className="italic text-[#f0f6fc]">{location}</p>
        </div>
        <span className="mt-2 md:mt-0 italic text-[#7d8590]">{duration}</span>
      </div>
      <ul className="space-y-2 text-[#f0f6fc]">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>• {responsibility}</li>
        ))}
      </ul>
    </div>
  );
}
