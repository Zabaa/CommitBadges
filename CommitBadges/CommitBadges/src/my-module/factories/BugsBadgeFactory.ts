import RestClient = require("TFS/WorkItemTracking/RestClient");

namespace Factories {
    
    export class BugsBadgeFactory {

        private resultComparer: Abstracts.ResultComparator;
        private viewBuilder: Abstracts.ViewBuilder;

        public create() {
            var client = RestClient.getClient();

            var client = RestClient.getClient();
            var projectId = VSS.getWebContext().project.id;
            var userId = VSS.getWebContext().user.id;

            var queryText = this.getQuery();
            var query = { query: queryText};

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
}

