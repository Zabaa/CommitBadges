import * as factories from "./factories/AllFactories";
import { DefaultViewBuilder } from "./view-builders/DefaultViewBuilders";

export class FactoriesProcessor {
    public runAllFactories() {
        var factories = this.getBadgeFactories();
        factories.forEach(function (fact) {
            var f = new fact(new Comparators.DefaultResultComparator(), new DefaultViewBuilder());
            f.create();
        })
    }

    private getBadgeFactories(): FactoryConstructor[] {
        let list = [];

        for (let factory in factories) {
            let obj = factories[factory];
            if (obj.prototype instanceof Factories.BadgeFactory) {
                list.push(obj);
            }
        }
        return list;
    }
}

interface FactoryConstructor {
    new (resultComparer: Comparators.ResultComparator, viewBuilder: ViewBuilders.ViewBuilder): Factories.BadgeFactory;
}