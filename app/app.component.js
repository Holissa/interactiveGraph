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
var AppComponent = (function () {
    function AppComponent() {
        this.d = document;
        this.indKey = false;
        this.pointCorX = 110; //координаты контрольной точки по x
        this.pointCorY = 130; //координаты контрольной точки по у
        this.monthName = 1;
        this.numDay = 1;
        this.dollarsVal = '64,01';
        this.ratingVal = '0,52';
        this.attrX_m = 113;
        this.attrX_sc = 120;
        this.regX = /\s\d+/g; // для поиска координат по x
        this.regY = /,\d+/g; // для поиска координат по y
        // ----------------------------------------------------------- DATA -----------------------------------------------------------
        this.pointsCor = ' 110,130 120,135 160,140 170,125 175,160 185,165 195,175 205,165 260,160 290,150 315,180 320,155 395,175 470,180 500,170 510,180 520,165 540,165 550,185 560,240 580,240 580,245 625,245 650,300 680,300 690,305 750,240 760,260 840,265 860,250 875,240 895,255 895,265 910,250 930,200 945,185 960,205 980,230 1020,230 1050,255 1060,275 1080,275 1100,255 1155,270 1185,210 1240,170';
        this.scales = [80, 60, 40, 20, 0];
        this.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        this.days = [
            { day: 2, dollar: '64,01', value: '0,52' },
            { day: 13, dollar: '64,05', value: '0,55' },
            { day: 21, dollar: '63,95', value: '0,48' },
            { day: 4, dollar: '63,15', value: '0,32' },
            { day: 18, dollar: '63,85', value: '0,54' },
            { day: 3, dollar: '64,01', value: '0,62' },
            { day: 10, dollar: '64,05', value: '0,53' },
            { day: 10, dollar: '64,12', value: '0,52' },
            { day: 7, dollar: '64,14', value: '0,33' },
            { day: 2, dollar: '64,17', value: '0,58' },
            { day: 13, dollar: '64,01', value: '0,52' },
            { day: 28, dollar: '64,11', value: '0,45' },
            { day: 15, dollar: '64,19', value: '0,65' },
            { day: 2, dollar: '64,45', value: '0,52' },
            { day: 14, dollar: '64,01', value: '0,44' },
            { day: 5, dollar: '64,01', value: '0,51' },
            { day: 27, dollar: '64,05', value: '0,31' },
            { day: 2, dollar: '64,01', value: '0,47' },
            { day: 13, dollar: '64,01', value: '0,43' },
            { day: 5, dollar: '64,01', value: '0,51' },
            { day: 11, dollar: '64,01', value: '0,57' },
            { day: 25, dollar: '64,15', value: '0,52' },
            { day: 13, dollar: '64,85', value: '0,48' },
            { day: 21, dollar: '64,01', value: '0,45' },
            { day: 2, dollar: '64,01', value: '0,55' },
            { day: 1, dollar: '64,05', value: '0,51' },
            { day: 9, dollar: '64,01', value: '0,52' },
            { day: 15, dollar: '64,01', value: '0,43' },
            { day: 22, dollar: '64,45', value: '0,48' },
            { day: 13, dollar: '64,01', value: '0,31' },
            { day: 2, dollar: '64,01', value: '0,36' },
            { day: 6, dollar: '64,01', value: '0,52' },
            { day: 12, dollar: '64,85', value: '0,47' },
            { day: 14, dollar: '64,45', value: '0,56' },
            { day: 23, dollar: '64,01', value: '0,44' },
            { day: 13, dollar: '64,95', value: '0,52' },
            { day: 2, dollar: '64,01', value: '0,48' },
            { day: 10, dollar: '64,05', value: '0,42' },
            { day: 14, dollar: '64,01', value: '0,33' },
            { day: 23, dollar: '64,15', value: '0,31' },
            { day: 2, dollar: '64,01', value: '0,45' },
            { day: 13, dollar: '64,45', value: '0,47' },
            { day: 3, dollar: '64,01', value: '0,48' },
            { day: 27, dollar: '64,85', value: '0,50' },
            { day: 13, dollar: '64,01', value: '0,52' },
            { day: 2, dollar: '64,15', value: '0,43' },
            { day: 13, dollar: '64,01', value: '0,38' }
        ];
    }
    // ----------------------------------------------------------- END DATA -----------------------------------------------------------
    AppComponent.prototype.getPx = function (event) {
        if (event < 110) {
            this.par = 110;
            this.monthName = 1;
            return;
        }
        else if (event > 1240) {
            this.par = 1240;
            this.monthName = 12;
            return;
        }
        this.par = event;
        this.monthName = Math.floor(this.par / 98);
        this.getPolylineAr();
        for (var i = 0, max = this.coordinatArX.length; i < max; i++) {
            if (this.par == Number(this.coordinatArX[i])) {
                this.pointCorX = this.par;
                this.pointCorY = Number(this.coordinatArY[i]);
                this.numDay = this.days[i].day;
                this.dollarsVal = this.days[i].dollar;
                this.ratingVal = this.days[i].value;
                return;
            }
        }
    };
    ;
    AppComponent.prototype.getPolylineAr = function () {
        if (this.indKey === true) {
            return;
        }
        else {
            this.polyline = this.d.getElementById('poly');
            this.points = this.polyline.getAttribute('points');
            // regY = /\d+/g;// для поиска всех координат (и по x и по y)
            this.coordinatArX = this.points.match(this.regX),
                this.coordinatArY = this.points.match(this.regY).join('').split(','); //сформируем массив координат графика по у (добавляет в массив координаты вместе с запятой,
            // убираем их с помощью манипуляций с join и split)
            this.coordinatArY.splice(0, 1); //так как обрезает по ',', первый элемент массива оказывается пустым, удаляем его из массива
            this.indKey = true;
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
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <svg class=\"graph\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" (mousemove)=\"getPx($event.clientX)\">\n\n            <g class=\"grid y-grid\" id=\"yGrid\">\n                <line x1=\"86\" x2=\"95%\" y1=\"126\" y2=\"126\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"185\" y2=\"185\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"243\" y2=\"243\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"301\" y2=\"301\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"360\" y2=\"360\"></line>\n            </g>\n\n            <!-------------------------------------------------------- GRAPH -------------------------------------------------------->\n            <polyline id=\"poly\" fill=\"none\" stroke=\"#0074d9\" stroke-width=\"2\" [attr.points]=\"pointsCor\"/>\n            <!-------------------------------------------------------- END GRAPH -------------------------------------------------------->\n            \n            <!-------------------------------------------------------- INDICATOR  -------------------------------------------------------->\n            <circle class=\"shadow\" [attr.cx]=\"pointCorX\" [attr.cy]=\"pointCorY\" r=\"5\" stroke=\"#AAA\" stroke-width=\"4\" stroke-opacity=\"1\"></circle>\n           \n            <filter id=\"dropShadow\">\n                <feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"3\"/>\n                <feOffset dx=\"2\" dy=\"4\"/>\n                <feMerge>\n                    <feMergeNode/>\n                    <feMergeNode in=\"SourceGraphic\"/>\n                </feMerge>\n            </filter>\n            \n            <g>\n                <rect [attr.x]=\"(pointCorX > 1080) ? pointCorX -160 : pointCorX\" [attr.y]=\"pointCorY-80\" width=\"145\" height=\"60\" fill=\"white\" filter=\"url(#dropShadow)\"/>\n                <text [attr.x]=\"(pointCorX > 1080) ? pointCorX-90 : pointCorX+70\" [attr.y]=\"pointCorY-55\" alignment-baseline=\"middle\" text-anchor=\"middle\" fill=\"#98979c\">\n                    {{numDay}} {{months[monthName - 1]}} 2015\n                </text>\n                <text [attr.x]=\"(pointCorX > 1080) ? pointCorX-120 : pointCorX+40\" [attr.y]=\"pointCorY-35\" alignment-baseline=\"middle\" text-anchor=\"middle\">\n                    &#36; {{dollarsVal}}\n                </text>\n                <text [attr.x]=\"(pointCorX > 1080) ? pointCorX-60 : pointCorX+100\" [attr.y]=\"pointCorY-35\" alignment-baseline=\"middle\" text-anchor=\"middle\" fill=\"#468f45\">\n                    &#9650; {{ratingVal}}\n                </text>\n                <line class=\"indicator\" [attr.x1]=\"pointCorX\" [attr.y1]=\"pointCorY+5\" [attr.x2]=\"pointCorX\" y2=\"360\"></line>\n            </g>\n            <!-------------------------------------------------------- END INDICATOR  -------------------------------------------------------->\n            \n            <g class=\"labels x-labels\">\n                <text [attr.x]=\"attrX_m+(100*i)\" [attr.y]=\"400\" *ngFor=\"let month of months; let i=index;\">\n                    {{month}}\n                </text>\n                <text x=\"105\" y=\"425\" font-size=\"16px\">2015</text>\n            </g>\n\n            <g class=\"labels y-labels\">\n                <text x=\"70\" [attr.y]=\"attrX_sc+(60*i)\" *ngFor=\"let scale of scales; let i=index;\">\n                    {{scale}}\n                </text>\n            </g>\n            \n            \n        </svg>\n\n    ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map