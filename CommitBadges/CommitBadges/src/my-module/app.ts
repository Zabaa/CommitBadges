import CommitBadges = require("./CommitBadges");

VSS.require("TFS/Dashboards/WidgetHelpers", function (WidgetHelpers) {

    $("#content").text("List of badges");

    var commitBadges = new CommitBadges.CommitBadges();
    commitBadges.buildGrid();
    commitBadges.buildDateTimeCombo();

    VSS.notifyLoadSucceeded();
});