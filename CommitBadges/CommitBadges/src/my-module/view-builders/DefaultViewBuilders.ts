import * as Controls from "VSS/Controls"
import * as Grids from "VSS/Controls/Grids";
import { ViewBuilder } from "./ViewBuilder";
import Badge from "./../badges/Badge";

export class DefaultViewBuilder implements ViewBuilder {
    public build(badge: Badge) {

        let gridContainer = $(`#${badge.constructor.name}`);
        let progress: string = `<progress max="${badge.requiredPoints}" value="${badge.points}"></progress>`;

        var source = [
            { key: "Name", value: badge.name },
            { key: "Description", value: badge.description },
            { key: "Point", value: badge.points },
            { key: "Required", value: badge.requiredPoints },
            { key: "Progress", value: progress}
        ];

        var gridOptions: Grids.IGridOptions = {
            height: "200px",
            width: "400px",
            source: source,
            draggable: false,
            allowMoveColumns: false,
            columns: [
                { text: "Property", width: 125, index: "key", canSortBy: false },
                { text: "Value", width: 200, index: "value", canSortBy: false }
            ]
        };

        Controls.create(Grids.Grid, gridContainer, gridOptions);
    }
}