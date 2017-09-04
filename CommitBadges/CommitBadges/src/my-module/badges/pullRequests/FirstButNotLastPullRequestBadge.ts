import { Badge } from "./../Badge";

export class FirstButNotLastPullRequestBadge implements Badge {
    public name: string;
    public description: string;
    public points: number;
    public requiredPoints: number;

    constructor() {
        this.name = "First But Not Last";
        this.requiredPoints = 1;
        this.description = `Congratulations! Your first pull request is complete`;
    }

    public granted(): boolean {
        return this.points >= this.requiredPoints;
    }
}