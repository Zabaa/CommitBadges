import * as factories from "./factories/AllFactories";

export class FactoriesProcessor {
    public runAllFactories() {
        var factories = this.getBadgeFactories();
        factories.forEach(function (fact) {
            var f = new fact();
            f.create();
        })
    }

    private getBadgeFactories(): FactoryConstructor[] {
        let list = [];

        //TODO: test this idea
        Object.keys(factories).forEach(name => {
            let obj = this[name];

            if (obj.prototype instanceof Factories.BadgeFactory) {
                list.push(obj);
            }
        });
        
        return list;
    }
}

interface FactoryConstructor {
    new (): Factories.BadgeFactory;
}