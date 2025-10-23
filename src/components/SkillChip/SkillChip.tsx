import type { SkillChipProps } from './skill';

const colorVariants = {
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
  purple: 'bg-purple-100 text-purple-800',
  orange: 'bg-orange-100 text-orange-800',
  pink: 'bg-pink-100 text-pink-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  red: 'bg-red-100 text-red-800',
  indigo: 'bg-indigo-100 text-indigo-800'
};

const sizeVariants = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-4 py-2 text-base'
};

export default function SkillChip({ 
  skill, 
  variant = 'blue', 
  size = 'md' 
}: SkillChipProps) {
  return (
    <span className={`${colorVariants[variant]} ${sizeVariants[size]} rounded-full font-medium`}>
      {skill}
    </span>
  );
}
