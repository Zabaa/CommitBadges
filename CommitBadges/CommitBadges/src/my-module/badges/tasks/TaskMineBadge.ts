namespace Badges {
    export class TaskMineBadge implements Badge {
        public name: string;
        public description: string;
        public points: number;
        public requiredPoints: number;

        constructor() {
            this.name = "Task Miner Badge";
            this.requiredPoints = 50;
            this.description = `Create at least ${this.requiredPoints} tasks`;
        }
    }
}