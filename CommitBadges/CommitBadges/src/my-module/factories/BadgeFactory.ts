import { ResultComparator } from "./../result-comparators/ResultComparator";
import { ViewBuilder } from "./../view-builders/ViewBuilder";

export abstract class BadgeFactory {

    protected resultComparer: ResultComparator;
    protected viewBuilder: ViewBuilder;

    constructor(resultComparer: ResultComparator, viewBuilder: ViewBuilder) {
        if (resultComparer == null)
            throw new Error('resultComparer is null');
        this.resultComparer = resultComparer;

        if (viewBuilder == null)
            throw new Error('viewBuilder is null');
        this.viewBuilder = viewBuilder
    }

    public abstract create();
}
