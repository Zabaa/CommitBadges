﻿abstract class Badge {
    name: string;
    points: number;

    public abstract SelectQuery(): void;
    public abstract CompareResultWithRequirements(): void

    public LoadBadge(): void {
        this.SelectQuery();
        this.CompareResultWithRequirements
    }
}