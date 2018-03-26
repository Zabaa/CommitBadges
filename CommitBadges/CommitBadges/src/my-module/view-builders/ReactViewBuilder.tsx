import { ViewBuilder } from "./ViewBuilder";
import Badge from "./../badges/Badge";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import { BadgeCard } from "./Components";

export default class ReactViewBuilder implements ViewBuilder {
    public build(badge: Badge) {
        ReactDOM.render(
            <BadgeCard name={badge.name} points={badge.points} />,
            document.getElementById(badge.name))
    }
}