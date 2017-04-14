"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.scale = {
            "1": {
                "10": 100,
                "9.5": 98,
                "9": 96,
                "8.5": 94,
                "8": 92,
                "7.5": 91,
                "7": 89,
                "6.5": 88
            },
            "2": {
                "10": 96,
                "9.5": 94,
                "9": 92,
                "8.5": 91,
                "8": 89,
                "7.5": 88,
                "7": 86,
                "6.5": 85
            },
            "3": {
                "10": 92,
                "9.5": 91,
                "9": 89,
                "8.5": 88,
                "8": 86,
                "7.5": 85,
                "7": 84,
                "6.5": 82
            },
            "4": {
                "10": 89,
                "9.5": 88,
                "9": 86,
                "8.5": 85,
                "8": 84,
                "7.5": 82,
                "7": 81,
                "6.5": 80
            },
            "5": {
                "10": 86,
                "9.5": 85,
                "9": 84,
                "8.5": 82,
                "8": 81,
                "7.5": 80,
                "7": 79,
                "6.5": 77
            },
            "6": {
                "10": 84,
                "9.5": 82,
                "9": 81,
                "8.5": 80,
                "8": 79,
                "7.5": 77,
                "7": 76,
                "6.5": 75
            },
            "7": {
                "10": 81,
                "9.5": 80,
                "9": 79,
                "8.5": 77,
                "8": 76,
                "7.5": 75,
                "7": 74,
                "6.5": 72
            },
            "8": {
                "10": 79,
                "9.5": 77,
                "9": 76,
                "8.5": 75,
                "8": 74,
                "7.5": 72,
                "7": 71,
                "6.5": 69
            },
            "9": {
                "10": 76,
                "9.5": 75,
                "9": 74,
                "8.5": 72,
                "8": 71,
                "7.5": 69,
                "7": 68,
                "6.5": 67
            },
            "10": {
                "10": 74,
                "9.5": 72,
                "9": 71,
                "8.5": 69,
                "8": 68,
                "7.5": 67,
                "7": 65,
                "6.5": 64
            }
        };
    }
    AppComponent.prototype.calculate = function () {
        console.log();
        var percent = this.scale[this.reps][this.rpe];
        this.max = (this.weight / percent) * 100;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map