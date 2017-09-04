import { Badge } from "./../Badge";

export class BugsSlayerBadge implements Badge {
    public name: string;
    public description: string;
    public points: number;
    public requiredPoints: number;

    constructor() {
        this.name = "Bugs Slayer Badge";
        this.requiredPoints = 50;
        this.description = `Resolve at least ${this.requiredPoints} bugs`;
    }

    public granted(): boolean {
        return this.points >= this.requiredPoints;
    }
}
