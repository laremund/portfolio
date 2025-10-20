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
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-blue-600 font-medium">{company}</p>
          <p className="text-gray-600">{location}</p>
        </div>
        <span className="text-gray-500 mt-2 md:mt-0">{duration}</span>
      </div>
      <ul className="text-gray-600 space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>• {responsibility}</li>
        ))}
      </ul>
    </div>
  );
}
