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
    variants: {
        hidden: object;
        visible: object;
    };
    skillVariants: {
        hidden: object;
        visible: object;
    };
}

export interface SkillBadgeProps {
    skill: SkillItem;
    variants: {
        hidden: object;
        visible: object;
    };
}
