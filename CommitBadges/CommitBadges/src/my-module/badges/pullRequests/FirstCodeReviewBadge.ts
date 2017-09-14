import { Badge } from "./../Badge";

export class FirstCodeReviewBadge implements Badge {
    public name: string;
    public description: string;
    public points: number;
    public requiredPoints: number;
        
    constructor() {
        this.name = "First Code Review";
        this.requiredPoints = 1;
        this.description = `That's a cool code review bro`;
    }

    public granted(): boolean {
        return this.points >= this.requiredPoints;
    }
}