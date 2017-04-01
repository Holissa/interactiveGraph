"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Item = (function () {
    function Item(name, value) {
        this.name = name;
        this.value = value;
    }
    return Item;
}());
exports.Item = Item;
var AppComponent = (function () {
    function AppComponent() {
        this.par = 70;
        this.x = 0;
        this.indKey = false;
        this.monthName = 1;
        this.pointCorX = 110;
        this.d = document;
        this.pointCorY = 130;
        this.numDay = 1;
        this.items = [
            { name: "Январь", value: 113 },
            { name: "Февраль", value: 213 },
            { name: "Март", value: 313 },
            { name: "Апрель", value: 413 },
            { name: "Май", value: 513 },
            { name: "Июнь", value: 613 },
            { name: "Июль", value: 713 },
            { name: "Август", value: 813 },
            { name: "Сентябрь", value: 913 },
            { name: "Октябрь", value: 1013 },
            { name: "Ноябрь", value: 1113 },
            { name: "Декабрь", value: 1213 }
        ];
        this.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        this.counter = this.changedItem();
    }
    AppComponent.prototype.getValue = function (i) {
        var val = document.getElementsByTagName('text')[i].attributes['x'];
        var val = val.toString();
        console.log(typeof val);
    };
    ;
    AppComponent.prototype.getPx = function (event) {
        this.par = event;
        this.monthName = Math.floor(this.par / 98);
        var polyline = this.d.getElementById('poly'), points = polyline.getAttribute('points'), reg = /\d+/g, coordinatAr = points.match(reg); //сформируем массив координат графика
        for (var i = 0, max = coordinatAr.length; i < max; i++) {
            if (i % 2 == 0) {
                if (this.par == Number(coordinatAr[i])) {
                    this.pointCorX = this.par;
                    this.pointCorY = Number(coordinatAr[i + 1]);
                    return;
                }
            }
        }
    };
    ;
    AppComponent.prototype.getW = function (event) {
        // event.currentTarget.getBBox().width;
        var lineLength = event.currentTarget.getBBox().width; //длина линии
        // var monthLength = Math.floor(lineLength / 12); //найдем сколько пикселей приходиться на каждый месяц (98px)
        var monthLength = Math.floor(lineLength / 365); //найдем сколько пикселей приходиться на каждый день (3px)
        console.log(monthLength);
    };
    ;
    AppComponent.prototype.changedItem = function () {
        var count = 113;
        return function () {
            return count += 146;
        };
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <svg class=\"graph\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" (mousemove)=\"getPx($event.clientX)\">\n\n            \n            <!--<g class=\"indicator\" [ngStyle]=\"{'visibility': (indKey == true) ? 'visible' : 'hidden'}\">-->\n\n            <!--<g class=\"grid y-grid\" id=\"yGrid\" (mousemove)=\"getW($event)\">-->\n            <g class=\"grid y-grid\" id=\"yGrid\">\n                <line x1=\"86\" x2=\"95%\" y1=\"126\" y2=\"126\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"185\" y2=\"185\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"243\" y2=\"243\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"301\" y2=\"301\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"360\" y2=\"360\"></line>\n            </g>\n\n            <!-------------------------------------------------------- GRAPH -------------------------------------------------------->\n            <polyline id=\"poly\"\n                      fill=\"none\"\n                      stroke=\"#0074d9\"\n                      stroke-width=\"2\"\n                      points=\"\n                            110,130       \n                            120,135      \n                            160,140  \n                            170,125   \n                            175,160     \n                            185,165  \n                            195,175  \n                            205,165 \n                            260,160 \n                            290,150 \n                            315,180 \n                            320,155\n                            395,175 \n                            470,180 \n                            500,170   \n                            510,180  \n                            520,165 \n                            540,165 \n                            550,185 \n                            560,240  \n                            580,240  \n                            580,245  \n                            625,245\n                            650,300   \n                            680,300  \n                            690,305   \n                            750,240   \n                            760,260   \n                            840,265  \n                            860,250   \n                            875,240    \n                            895,255 \n                            895,265  \n                            910,250  \n                            930,200  \n                            945,185\n                            960,205 \n                            980,230  \n                            1020,230   \n                            1050,255  \n                            1060,275 \n                            1080,275  \n                            1100,255 \n                            1155,270 \n                            1185,210 \n                            1240,170\n     \"\n            />\n            <!-------------------------------------------------------- END GRAPH -------------------------------------------------------->\n\n\n            \n            <!-------------------------------------------------------- INDICATOR  -------------------------------------------------------->\n            <circle class=\"shadow\" [attr.cx]=\"pointCorX\" [attr.cy]=\"pointCorY\" r=\"5\" stroke=\"#AAA\" stroke-width=\"4\"\n                    stroke-opacity=\"1\"></circle>\n            \n            <g>\n                <filter id=\"dropShadow\">\n                    <feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"3\"/>\n                    <feOffset dx=\"2\" dy=\"4\"/>\n                    <feMerge>\n                        <feMergeNode/>\n                        <feMergeNode in=\"SourceGraphic\"/>\n                    </feMerge>\n                </filter>\n                <rect [attr.x]=\"par\" y=\"10\" width=\"200\" height=\"100\" fill=\"white\" filter=\"url(#dropShadow)\"/>\n                <text [attr.x]=\"par+70\" y=\"22%\" alignment-baseline=\"middle\" text-anchor=\"middle\">\n                    {{pointCorX}}{{months[monthName - 1]}} 2015\n                </text>\n                <line class=\"indicator\" [attr.x1]=\"pointCorX\" y1=\"110\" [attr.x2]=\"pointCorX\" y2=\"380\"></line>\n            </g>\n\n\n            <!-------------------------------------------------------- END INDICATOR  -------------------------------------------------------->\n\n            \n            <g class=\"labels x-labels\">\n                <text [attr.x]=\"item.value\" [attr.y]=\"400\" *ngFor=\"let item of items; let i=index; let last = last;\"\n                      (click)=\"getValue(i)\">\n                    {{item.name}}\n                </text>\n                <text x=\"105\" y=\"425\" font-size=\"16px\">2015</text>\n            </g>\n\n            <g class=\"labels y-labels\">\n                <text x=\"70\" y=\"120\">80</text>\n                <text x=\"70\" y=\"180\">60</text>\n                <text x=\"70\" y=\"240\">40</text>\n                <text x=\"70\" y=\"300\">20</text>\n                <text x=\"70\" y=\"365\">0</text>\n            </g>\n        </svg>\n\n    ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map