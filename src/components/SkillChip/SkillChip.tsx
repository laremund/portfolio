import type { SkillChipProps } from './skill';

const colorVariants = {
  blue: { backgroundColor: '#0969da', color: '#ffffff' },
  green: { backgroundColor: '#1a7f37', color: '#ffffff' },
  purple: { backgroundColor: '#8250df', color: '#ffffff' },
  orange: { backgroundColor: '#bf8700', color: '#ffffff' },
  pink: { backgroundColor: '#bf3989', color: '#ffffff' },
  yellow: { backgroundColor: '#9a6700', color: '#ffffff' },
  red: { backgroundColor: '#da3633', color: '#ffffff' },
  indigo: { backgroundColor: '#6f42c1', color: '#ffffff' }
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
      className={`${sizeVariants[size]} rounded-full font-medium`}
      style={colorVariants[variant]}
    >
      {skill}
    </span>
  );
}
