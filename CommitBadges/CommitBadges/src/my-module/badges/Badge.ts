namespace Badges {
    export interface Badge {
        name: string;
        description: string;
        points: number;
        requiredPoints: number;
        granted(): boolean
    }
}