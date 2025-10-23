export type SkillChipVariant = 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'yellow' | 'red' | 'indigo';

export type SkillChipSize = 'sm' | 'md' | 'lg';

export interface SkillChipProps {
  skill: string;
  variant?: SkillChipVariant;
  size?: SkillChipSize;
}

