/// <reference types="vss-web-extension-sdk" />

import Controls = require("VSS/Controls");
import Grids = require("VSS/Controls/Grids");
import tf = require("TFS/WorkItemTracking/RestClient")



class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

var el = document.getElementById('content');
var greeter = new Greeter(el);
greeter.start();