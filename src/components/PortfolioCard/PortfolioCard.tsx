interface PortfolioCardProps {
  title: string;
  description: string;
  technologies: string[];
  gradientFrom: string;
  gradientTo: string;
  projectName: string;
}

export default function PortfolioCard({ 
  title, 
  description, 
  technologies, 
  gradientFrom, 
  gradientTo, 
  projectName 
}: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden portfolio-card">
      <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} h-48 flex items-center justify-center`}>
        <span className="text-white text-lg font-semibold">{projectName}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => {
            const colorClasses = [
              'bg-blue-100 text-blue-800',
              'bg-green-100 text-green-800',
              'bg-purple-100 text-purple-800',
              'bg-orange-100 text-orange-800',
              'bg-pink-100 text-pink-800',
              'bg-yellow-100 text-yellow-800',
              'bg-red-100 text-red-800',
              'bg-indigo-100 text-indigo-800'
            ];
            const colorClass = colorClasses[index % colorClasses.length];
            
            return (
              <span key={index} className={`${colorClass} px-3 py-1 rounded-full text-sm`}>
                {tech}
              </span>
            );
          })}
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
        </div>
      </div>
    </div>
  );
}
