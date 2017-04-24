/// <reference types="vss-web-extension-sdk" />

import Controls = require("VSS/Controls");
import Grids = require("VSS/Controls/Grids");
import Combos = require("VSS/Controls/Combos");
import TreeView = require("VSS/Controls/TreeView");

export class CommitBadges {
    gridContainer = $("#grid-container");

    public buildGrid() {

        var source = [
            { name: "Germany", population: 8e7 },
            { name: "Turkey", population: 75e6 },
            { name: "Russia", population: 15e7 },
            { name: "Spain", population: 45e6 }
        ];

        var gridOptions: Grids.IGridOptions = {
            height: "600px",
            width: "400px",
            source: source,
            columns: [
                { text: "Country", width: 200, index: "name" },
                { text: "Population", width: 200, index: "population" }
            ]
        };

        Controls.create(Grids.Grid, this.gridContainer, gridOptions);
    }

    public buildDateTimeCombo() {

        var container = $(".date-container");

        var dateTimeOptions: Combos.IDateTimeComboOptions = {
            value: "Tuesday, September 29, 1982 8:30:00 AM",
            type: "date-time",
            dateTimeFormat: "F",
            change: function () {
                commandArea.prepend($("<div />").text(dateTimeCombo.getValue().toString()));
            }
        };

        $("<label />").text("Select your birthday:").appendTo(container);

        var dateTimeCombo = Controls.create(Combos.Combo, container, dateTimeOptions);
        var commandArea = $("<div style='margin:10px' />").appendTo(container);
    }
}