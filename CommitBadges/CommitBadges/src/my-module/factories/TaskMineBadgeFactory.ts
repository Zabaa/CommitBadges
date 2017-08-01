import RestClient = require("TFS/WorkItemTracking/RestClient");

export class TaskMineBadgeFactory extends Factories.BadgeFactory {

    private resultComparer: Abstracts.ResultComparator;
    private viewBuilder: Abstracts.ViewBuilder;

    constructor(resultComparer: Abstracts.ResultComparator, viewBuilder: Abstracts.ViewBuilder) {
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

        var queryText = this.getQuery();
        var query = { query: queryText };

        client.queryByWiql(query, projectId).then(result => {
            console.log(result.workItems.length);
            this.resultComparer.compare(result.workItems.length);
            this.viewBuilder.build();
        });
    }

    private getQuery(): string {
        return "TODO: create wiql query";
    }
}