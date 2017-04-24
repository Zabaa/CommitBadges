import RestClient = require("TFS/WorkItemTracking/RestClient");
import '../Badge';
import BugsQuery = require("./BugsQuery")

export class BugsBadge extends Badge {

    public SelectQuery(): void {
        var client = RestClient.getClient();
        var projectId = VSS.getWebContext().project.id;
        var userId = VSS.getWebContext().user.id;


        var query = { query: BugsQuery.BugsQuery.query };

        client.queryByWiql(query, projectId).then(result => {
            console.log(result.workItems.length);
        });

        client.queryById("42739ab2-94f4-48a3-a806-56e9c12a980e", projectId).then(result => {
            var workItemIds = result.workItems.map(function (reference) { return reference.id; });

            client.getWorkItems(workItemIds, ["System.Title"]).then(workItems => {
                workItems.forEach(workItem => {
                    console.log(workItem.url);
                })
            });
        });
    }

    public CompareResultWithRequirements(): void {

    }
}