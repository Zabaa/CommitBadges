import CommitBadges = require("./CommitBadges");
import FactoriesProcessor = require("./FactoriesProcessor");
import ReactViewBuilder from "./view-builders/ReactViewBuilder";
import BugsSlayerBadge from "./badges/bugs/BugsSlayerBadge"

VSS.require("TFS/Dashboards/WidgetHelpers", function (WidgetHelpers) {

    var factoriesProcessor = new FactoriesProcessor.FactoriesProcessor();
    factoriesProcessor.runAllFactories();
    
    const reactBuilder = new ReactViewBuilder();
    const bugsBadge = new BugsSlayerBadge();
    bugsBadge.points = 12;
    bugsBadge.name = "TestReactBadge";

    reactBuilder.build(bugsBadge);

    VSS.notifyLoadSucceeded();
});