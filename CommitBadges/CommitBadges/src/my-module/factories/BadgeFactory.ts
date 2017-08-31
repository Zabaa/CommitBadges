namespace Factories {
    export abstract class BadgeFactory {

        protected resultComparer: Comparators.ResultComparator;
        protected viewBuilder: ViewBuilders.ViewBuilder;

        constructor(resultComparer: Comparators.ResultComparator, viewBuilder: ViewBuilders.ViewBuilder) {
            if (resultComparer == null)
                throw new Error('resultComparer is null');
            this.resultComparer = resultComparer;

            if (viewBuilder == null)
                throw new Error('viewBuilder is null');
            this.viewBuilder = viewBuilder
        }

        public abstract create();
    }
}