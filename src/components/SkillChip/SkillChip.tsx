import type { SkillChipProps } from './skill';

const colorVariants = {
  blue: 'bg-[#0969da] text-white',
  green: 'bg-[#1a7f37] text-white',
  purple: 'bg-[#8250df] text-white',
  orange: 'bg-[#bf8700] text-white',
  pink: 'bg-[#bf3989] text-white',
  yellow: 'bg-[#9a6700] text-white',
  red: 'bg-[#da3633] text-white',
  indigo: 'bg-[#6f42c1] text-white'
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
    <span 
      className={`${sizeVariants[size]} ${colorVariants[variant]} rounded-full font-medium`}
    >
      {skill}
    </span>
  );
}
