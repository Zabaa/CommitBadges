import RestClient = require("TFS/WorkItemTracking/RestClient");
import { BadgeFactory } from "./BadgeFactory";
import { TaskMineBadge } from "./../badges/tasks/TaskMineBadge";
import { ResultComparator } from "./../result-comparators/ResultComparator";
import { ViewBuilder } from "./../view-builders/ViewBuilder";

export class TaskMineBadgeFactory extends BadgeFactory {

    constructor(resultComparer: ResultComparator, viewBuilder: ViewBuilder) {
        super(resultComparer, viewBuilder);
    }

    public create() {
        var client = RestClient.getClient();
        var projectId = VSS.getWebContext().project.id;
        var userId = VSS.getWebContext().user.uniqueName;

        var query = { query: this.getQuery(userId) };

        client.queryByWiql(query, projectId).then(result => {
            var badge = new TaskMineBadge();
            this.resultComparer.compare(result.workItems.length, badge);
            this.viewBuilder.build(badge);
        });
    }

    private getQuery(userId: string): string {
        return `SELECT [System.Id]
                FROM workitems
                WHERE [System.TeamProject] = @project
                AND [System.WorkItemType] = "Task"
                AND [System.CreatedBy] = "${userId}"`
    }
}