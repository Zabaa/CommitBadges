import CommitBadges = require("./CommitBadges");
import FactoriesProcessor = require("./FactoriesProcessor");

VSS.require("TFS/Dashboards/WidgetHelpers", function (WidgetHelpers) {

    var factoriesProcessor = new FactoriesProcessor.FactoriesProcessor();
    factoriesProcessor.runAllFactories();

    VSS.notifyLoadSucceeded();
});