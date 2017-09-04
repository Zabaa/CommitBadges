import RestClient = require("TFS/VersionControl/GitRestClient");
import Contracts = require("TFS/VersionControl/Contracts");

import { BadgeFactory } from "./BadgeFactory";
import { FirstButNotLastPullRequestBadge } from "./../badges/pullRequests/FirstButNotLastPullRequestBadge";
import { ResultComparator } from "./../result-comparators/ResultComparator";
import { ViewBuilder } from "./../view-builders/ViewBuilder";

export class FirstButNotLastPullRequestBadgeFactory extends BadgeFactory {
    
    constructor(resultComparer: ResultComparator, viewBuilder: ViewBuilder) {
        super(resultComparer, viewBuilder);
    }

    public create() {
        var client = RestClient.getClient();
        var projectId = VSS.getWebContext().project.id;
        var userId = VSS.getWebContext().user.uniqueName;

        client.getPullRequestsByProject(projectId, this.getCriteria(userId)).then(result => {
            let number: number;
            if (result == null) {
                number = 0;
            } else {
                number = result.length;
            }
            var badge = new FirstButNotLastPullRequestBadge();
            this.resultComparer.compare(number, badge);
            this.viewBuilder.build(badge);
        });
    }

    private getCriteria(userId: string): Contracts.GitPullRequestSearchCriteria {
        return {
            creatorId: userId,
            includeLinks: false,
            repositoryId: null,
            reviewerId: null,
            sourceRefName: null,
            status: Contracts.PullRequestStatus.Completed,
            targetRefName: null
        };
    }
}