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
        this.regX = /\s\d+/g; // для поиска координат по x
        this.regY = /,\d+/g; // для поиска координат по y
        // ----------------------------------------------------------- DATA -----------------------------------------------------------
        this.scales = [80, 60, 40, 20, 0];
        this.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        this.days = [
            { day: 2, dollar: 64, value: 0.52 },
            { day: 13, dollar: 62, value: 0.52 },
            { day: 21, dollar: 61, value: 0.52 },
            { day: 4, dollar: 64, value: 0.52 },
            { day: 18, dollar: 62, value: 0.52 },
            { day: 3, dollar: 64, value: 0.52 },
            { day: 10, dollar: 62, value: 0.52 },
            { day: 10, dollar: 64, value: 0.52 },
            { day: 7, dollar: 62, value: 0.52 },
            { day: 2, dollar: 64, value: 0.52 },
            { day: 13, dollar: 62, value: 0.52 },
            { day: 28, dollar: 64, value: 0.52 },
            { day: 15, dollar: 62, value: 0.52 },
            { day: 2, dollar: 64, value: 0.52 },
            { day: 14, dollar: 62, value: 0.52 },
            { day: 5, dollar: 64, value: 0.52 },
            { day: 27, dollar: 62, value: 0.52 },
            { day: 2, dollar: 64, value: 0.52 },
            { day: 13, dollar: 62, value: 0.52 },
            { day: 5, dollar: 64, value: 0.52 },
            { day: 11, dollar: 62, value: 0.52 },
            { day: 25, dollar: 64, value: 0.52 },
            { day: 13, dollar: 62, value: 0.52 },
            { day: 21, dollar: 61, value: 0.52 },
            { day: 2, dollar: 64, value: 0.52 },
            { day: 1, dollar: 62, value: 0.52 },
            { day: 9, dollar: 64, value: 0.52 },
            { day: 15, dollar: 62, value: 0.52 },
            { day: 22, dollar: 64, value: 0.52 },
            { day: 13, dollar: 62, value: 0.52 },
            { day: 2, dollar: 64, value: 0.52 },
            { day: 6, dollar: 62, value: 0.52 },
            { day: 12, dollar: 64, value: 0.52 },
            { day: 14, dollar: 62, value: 0.52 },
            { day: 23, dollar: 64, value: 0.52 },
            { day: 13, dollar: 62, value: 0.52 },
            { day: 2, dollar: 64, value: 0.52 },
            { day: 10, dollar: 62, value: 0.52 },
            { day: 14, dollar: 64, value: 0.52 },
            { day: 23, dollar: 62, value: 0.52 },
            { day: 2, dollar: 64, value: 0.52 },
            { day: 13, dollar: 62, value: 0.52 },
            { day: 3, dollar: 62, value: 0.52 },
            { day: 27, dollar: 64, value: 0.52 },
            { day: 13, dollar: 62, value: 0.52 },
            { day: 2, dollar: 64, value: 0.52 },
            { day: 13, dollar: 62, value: 0.52 }
        ];
    }
    // ----------------------------------------------------------- END DATA -----------------------------------------------------------
    AppComponent.prototype.getPx = function (event) {
        if (event < 110) {
            this.par = 110;
        }
        this.par = event;
        this.monthName = Math.floor(this.par / 98);
        this.getPolylineAr();
        for (var i = 0, max = this.coordinatArX.length; i < max; i++) {
            if (this.par == Number(this.coordinatArX[i])) {
                this.pointCorX = this.par;
                this.pointCorY = Number(this.coordinatArY[i]);
                this.numDay = this.days[i].day;
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
            template: "\n        <svg class=\"graph\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" (mousemove)=\"getPx($event.clientX)\">\n            \n            <g class=\"grid y-grid\" id=\"yGrid\">\n                <line x1=\"86\" x2=\"95%\" y1=\"126\" y2=\"126\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"185\" y2=\"185\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"243\" y2=\"243\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"301\" y2=\"301\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"360\" y2=\"360\"></line>\n            </g>\n\n            <!-------------------------------------------------------- GRAPH -------------------------------------------------------->\n            <polyline id=\"poly\"\n                      fill=\"none\"\n                      stroke=\"#0074d9\"\n                      stroke-width=\"2\"\n                      points=\"\n                            110,130       \n                            120,135      \n                            160,140  \n                            170,125   \n                            175,160     \n                            185,165  \n                            195,175  \n                            205,165 \n                            260,160 \n                            290,150 \n                            315,180 \n                            320,155\n                            395,175 \n                            470,180 \n                            500,170   \n                            510,180  \n                            520,165 \n                            540,165 \n                            550,185 \n                            560,240  \n                            580,240  \n                            580,245  \n                            625,245\n                            650,300   \n                            680,300  \n                            690,305   \n                            750,240   \n                            760,260   \n                            840,265  \n                            860,250   \n                            875,240    \n                            895,255 \n                            895,265  \n                            910,250  \n                            930,200  \n                            945,185\n                            960,205 \n                            980,230  \n                            1020,230   \n                            1050,255  \n                            1060,275 \n                            1080,275  \n                            1100,255 \n                            1155,270 \n                            1185,210 \n                            1240,170\n     \"\n            />\n            <!-------------------------------------------------------- END GRAPH -------------------------------------------------------->\n\n\n            <!-------------------------------------------------------- INDICATOR  -------------------------------------------------------->\n            <circle class=\"shadow\" [attr.cx]=\"pointCorX\" [attr.cy]=\"pointCorY\" r=\"5\" stroke=\"#AAA\" stroke-width=\"4\"\n                    stroke-opacity=\"1\"></circle>\n\n            <g>\n                <filter id=\"dropShadow\">\n                    <feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"3\"/>\n                    <feOffset dx=\"2\" dy=\"4\"/>\n                    <feMerge>\n                        <feMergeNode/>\n                        <feMergeNode in=\"SourceGraphic\"/>\n                    </feMerge>\n                </filter>\n                <rect [attr.x]=\"(pointCorX > 1080) ? pointCorX -200 : pointCorX\" [attr.y]=\"pointCorY-120\" width=\"200\"\n                      height=\"100\" fill=\"white\" filter=\"url(#dropShadow)\"/>\n                <text [attr.x]=\"(pointCorX > 1080) ? pointCorX-100 : pointCorX+100\" [attr.y]=\"pointCorY-100\"\n                      alignment-baseline=\"middle\" text-anchor=\"middle\">\n                    {{numDay}}{{months[monthName - 1]}} 2015\n                </text>\n                <line class=\"indicator\" [attr.x1]=\"pointCorX\" [attr.y1]=\"pointCorY\" [attr.x2]=\"pointCorX\"\n                      y2=\"360\"></line>\n            </g>\n\n\n            <!-------------------------------------------------------- END INDICATOR  -------------------------------------------------------->\n\n\n            <g class=\"labels x-labels\">\n                <text [attr.x]=\"113+(100*i)\" [attr.y]=\"400\" *ngFor=\"let month of months; let i=index;\">\n                    {{month}}\n                </text>\n                <text x=\"105\" y=\"425\" font-size=\"16px\">2015</text>\n            </g>\n\n            <g class=\"labels y-labels\">\n                <text x=\"70\" [attr.y]=\"120+(60*i)\" *ngFor=\"let scale of scales; let i=index;\">\n                    {{scale}}\n                </text>\n            </g>\n            \n            \n        </svg>\n\n    ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map