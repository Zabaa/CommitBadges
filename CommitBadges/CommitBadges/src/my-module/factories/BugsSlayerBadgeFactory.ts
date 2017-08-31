﻿import RestClient = require("TFS/WorkItemTracking/RestClient");

export class BugsSlayerBadgeFactory extends Factories.BadgeFactory {

    constructor(resultComparer: Comparators.ResultComparator, viewBuilder: ViewBuilders.ViewBuilder) {
        super(resultComparer, viewBuilder);
    }

    public create() {
        var client = RestClient.getClient();
        var projectId = VSS.getWebContext().project.id;
        var userId = VSS.getWebContext().user.id;

        var query = { query: this.getQuery(userId) };

        client.queryByWiql(query, projectId).then(result => {
            console.log(result.workItems.length);
            var badge = new Badges.BugsSlayerBadge();
            this.resultComparer.compare(result.workItems.length, badge);
            this.viewBuilder.build(badge);
        });
    }

    private getQuery(userId: string): string {
        return `SELECT [System.Id]
                FROM workitems
                WHERE [System.TeamProject] = @project
                AND [System.WorkItemType] = "Bug"
                AND [System.State] = "Closed"
                AND [Resolved By] = ${userId}`;
    }
}

