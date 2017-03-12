import CommitBadges = require("./CommitBadges");

VSS.require("TFS/Dashboards/WidgetHelpers", function (WidgetHelpers) {
    var commitBadges = new CommitBadges.CommitBadges();
    commitBadges.buildGrid();

    VSS.notifyLoadSucceeded();
});


