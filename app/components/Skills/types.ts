import { Variants } from 'framer-motion';

export interface SkillItem {
    name: string;
    icon: string;
}

export interface SkillsDataType {
    [key: string]: SkillItem[];
}

export interface SkillCategoryProps {
    title: string;
    skills: SkillItem[];
    variants: Variants;
    skillVariants: Variants;
}

export interface SkillBadgeProps {
    skill: SkillItem;
    variants: Variants;
}
