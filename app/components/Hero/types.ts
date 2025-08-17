export interface HeroProps {
    projectsRef: React.RefObject<HTMLElement | null>;
}

export interface ShapeConfig {
    minSize: number;
    maxSize: number;
    minDelay: number;
    maxDelay: number;
    minDuration: number;
    maxDuration: number;
    count: number;
}

export interface Shape {
    size: number;
    delay: number;
    x: string;
    y: string;
    duration: number;
}

export interface Position {
    x: string;
    y: string;
}
