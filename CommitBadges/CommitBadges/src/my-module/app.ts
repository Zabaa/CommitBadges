import CommitBadges = require("./CommitBadges");
import BugsBadge = require("./badges/bugs/BugsBadge")

VSS.require("TFS/Dashboards/WidgetHelpers", function (WidgetHelpers) {

    $("#content").text("List of badges");

    var commitBadges = new CommitBadges.CommitBadges();
    commitBadges.buildGrid();
    commitBadges.buildDateTimeCombo();

    var bugsBadge = new BugsBadge.BugsBadge();
    bugsBadge.SelectQuery();

    VSS.notifyLoadSucceeded();
});