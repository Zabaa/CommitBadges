/// <reference types="vss-web-extension-sdk" />

import Controls = require("VSS/Controls");
import Grids = require("VSS/Controls/Grids");
import { ViewBuilder } from "./ViewBuilder";
import { Badge } from "./../badges/Badge";

export class DefaultViewBuilder implements ViewBuilder {
    public build(badge: Badge) {

        let gridContainer = $(`#${badge.constructor.name}`);

        var source = [
            { key: "Name", value: badge.name },
            { key: "Description", value: badge.description },
            { key: "Point", value: badge.points },
            { key: "Required", value: badge.requiredPoints }
        ];

        var gridOptions: Grids.IGridOptions = {
            height: "600px",
            width: "400px",
            source: source,
            columns: [
                { text: "Property", width: 200, index: "key" },
                { text: "Value", width: 200, index: "value" }
            ]
        };

        Controls.create(Grids.Grid, gridContainer, gridOptions);
    }
}