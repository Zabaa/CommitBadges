﻿import RestClient = require("TFS/WorkItemTracking/RestClient");

export class TaskMineBadgeFactory extends Factories.BadgeFactory {

    private resultComparer: Comparators.ResultComparator;
    private viewBuilder: ViewBuilders.ViewBuilder;

    constructor(resultComparer: Comparators.ResultComparator, viewBuilder: ViewBuilders.ViewBuilder) {
        super();

        if (resultComparer == null)
            throw new Error('resultComparer is null');
        this.resultComparer = resultComparer;

        if (viewBuilder == null)
            throw new Error('viewBuilder is null');
        this.viewBuilder = viewBuilder
    }

    public create() {
        var client = RestClient.getClient();
        var projectId = VSS.getWebContext().project.id;
        var userId = VSS.getWebContext().user.id;

        var queryText = this.getQuery(userId);
        var query = { query: queryText };

        client.queryByWiql(query, projectId).then(result => {
            console.log(result.workItems.length);
            this.resultComparer.compare(result.workItems.length);
            this.viewBuilder.build();
        });
    }

    private getQuery(userId: string): string {
        return "TODO: create wiql query";
    }
}