import RestClient = require("TFS/WorkItemTracking/RestClient");

class BugsBadge extends Badge {

    public SelectQuery(): void {
        var client = RestClient.getClient();
        var projectId = VSS.getWebContext().project.id;

        client.queryById("42739ab2-94f4-48a3-a806-56e9c12a980e", projectId).then(result => {
            var workItemIds = result.workItems.map(function (reference) { return reference.id; });

            client.getWorkItems(workItemIds, ["System.Title"]).then(workItems => {
                workItems.forEach(workItem => {
                    
                })

            });
        });
    }

    public CompareResultWithRequirements(): void {

    }
}