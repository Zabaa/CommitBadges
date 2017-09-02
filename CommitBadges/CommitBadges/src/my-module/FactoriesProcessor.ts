import * as factories from "./factories/AllFactories";
import { DefaultViewBuilder } from "./view-builders/DefaultViewBuilders";
import { DefaultResultComparator } from "./result-comparators/DefaultResultComparator";
import { BadgeFactory } from "./factories/BadgeFactory";
import { ResultComparator } from "./result-comparators/ResultComparator";
import { ViewBuilder } from "./view-builders/ViewBuilder";

export class FactoriesProcessor {
    public runAllFactories() {
        var factories = this.getBadgeFactories();
        factories.forEach(function (fact) {
            var f = new fact(new DefaultResultComparator(), new DefaultViewBuilder());
            f.create();
        })
    }

    private getBadgeFactories(): FactoryConstructor[] {
        let list = [];

        for (let factory in factories) {
            let obj = factories[factory];
            if (obj.prototype instanceof BadgeFactory) {
                list.push(obj);
            }
        }
        return list;
    }
}

interface FactoryConstructor {
    new (resultComparer: ResultComparator, viewBuilder: ViewBuilder): BadgeFactory;
}