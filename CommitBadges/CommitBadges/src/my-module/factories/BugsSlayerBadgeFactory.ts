import RestClient = require("TFS/WorkItemTracking/RestClient");
import { BadgeFactory } from "./BadgeFactory";
import { BugsSlayerBadge } from "./../badges/bugs/BugsSlayerBadge";
import { ResultComparator } from "./../result-comparators/ResultComparator";
import { ViewBuilder } from "./../view-builders/ViewBuilder";

export class BugsSlayerBadgeFactory extends BadgeFactory {

    constructor(resultComparer: ResultComparator, viewBuilder: ViewBuilder) {
        super(resultComparer, viewBuilder);
    }

    public create() {
        var client = RestClient.getClient();
        var projectId = VSS.getWebContext().project.id;
        var userId = VSS.getWebContext().user.uniqueName;

        var query = { query: this.getQuery(userId) };

        client.queryByWiql(query, projectId).then(result => {
            console.log(result.workItems.length);
            var badge = new BugsSlayerBadge();
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
                AND [Resolved By] = "${userId}"`;
    }
}

