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
    <div className="rounded-lg p-6" style={{backgroundColor: '#161b22', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 4px 10px rgba(0, 0, 0, 0.3)'}}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold" style={{color: '#ffffff'}}>{title}</h3>
          <p className="font-medium" style={{color: '#4fc1ff'}}>{company}</p>
          <p style={{color: '#f0f6fc'}}>{location}</p>
        </div>
        <span className="mt-2 md:mt-0" style={{color: '#7d8590'}}>{duration}</span>
      </div>
      <ul className="space-y-2" style={{color: '#f0f6fc'}}>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>• {responsibility}</li>
        ))}
      </ul>
    </div>
  );
}
