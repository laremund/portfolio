import Button from '../Button/Button';
import SkillChip from '../SkillChip/SkillChip';
import type { SkillChipVariant } from '../SkillChip/skill';

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
    <div className="rounded-lg overflow-hidden portfolio-card" style={{backgroundColor: '#161b22', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 4px 10px rgba(0, 0, 0, 0.3)'}}>
      <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} h-48 flex items-center justify-center`}>
        <span className="text-white text-lg font-semibold">{projectName}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2" style={{color: '#ffffff'}}>{title}</h3>
        <p className="mb-4" style={{color: '#f0f6fc'}}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => {
            const variants: SkillChipVariant[] = [
              'blue', 'green', 'purple', 'orange', 'pink', 'yellow', 'red', 'indigo'
            ];
            const variant = variants[index % variants.length];
            
            return (
              <SkillChip key={index} skill={tech} variant={variant} size="sm" />
            );
          })}
        </div>
        <div className="flex gap-4">
          <Button href="#" variant="ghost">Live Demo</Button>
          <Button href="#" variant="ghost">GitHub</Button>
        </div>
      </div>
    </div>
  );
}
