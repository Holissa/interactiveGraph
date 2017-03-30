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
        this.items = [
            { name: "Январь", value: 113 },
            { name: "Февраль", value: 259 },
            { name: "Март", value: 405 },
            { name: "Апрель", value: 551 },
            { name: "Май", value: 697 },
            { name: "Июнь", value: 843 },
            { name: "Июль", value: 989 },
            { name: "Август", value: 1135 },
            { name: "Сентябрь", value: 1281 },
            { name: "Октябрь", value: 1427 },
            { name: "Ноябрь", value: 1573 },
            { name: "Декабрь", value: 1719 }
        ];
        this.counter = this.changedItem();
    }
    AppComponent.prototype.getValue = function (i) {
        var val = document.getElementsByTagName('text')[i].attributes['x'];
        var val = val.toString();
        console.log(typeof val);
    };
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
            template: "\n        <svg class=\"graph\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\">\n\n            <g class=\"grid y-grid\" id=\"yGrid\">\n                <line x1=\"86\" x2=\"95%\" y1=\"126\" y2=\"126\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"185\" y2=\"185\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"243\" y2=\"243\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"301\" y2=\"301\"></line>\n                <line x1=\"86\" x2=\"95%\" y1=\"360\" y2=\"360\"></line>\n            </g>\n\n\n            <polyline\n                    fill=\"none\"\n                    stroke=\"#0074d9\"\n                    stroke-width=\"2\"\n                    points=\"\n       00,120\n       20,60\n       40,80\n       60,20\n       80,80\n       100,80\n       120,60\n       140,100\n       160,90\n       180,80\n       200, 110\n       220, 10\n       240, 70\n       260, 100\n       280, 100\n       300, 40\n       320, 0\n       340, 100\n       360, 100\n       380, 120\n       400, 60\n       420, 70\n       440, 80\n     \"\n            />\n\n            <use class=\"grid double\" xlink:href=\"#xGrid\" style=\"\"></use>\n            <use class=\"grid double\" xlink:href=\"#yGrid\" style=\"\"></use>\n\n            <g class=\"first_set points\" data-setname=\"Our first data set\">\n                <circle cx=\"113\" cy=\"192\" data-value=\"7.2\" r=\"5\"></circle>\n                <circle cx=\"259\" cy=\"171\" data-value=\"8.1\" r=\"5\"></circle>\n                <circle cx=\"405\" cy=\"179\" data-value=\"7.7\" r=\"5\"></circle>\n                <circle cx=\"551\" cy=\"200\" data-value=\"6.8\" r=\"5\"></circle>\n                <circle cx=\"697\" cy=\"204\" data-value=\"6.7\" r=\"5\"></circle>\n            </g>\n\n            <g class=\"labels x-labels\">\n                <!--<text x=\"113\" y=\"400\" *ngFor=\"let item of items\">{{item.name}}</text>-->\n                <text [attr.x]=\"item.value\" [attr.y]=\"400\" *ngFor=\"let item of items; let i=index; let last = last;\"(click)=\"getValue(i)\">\n                    {{item.name}}\n                </text>\n                <!--<text x=\"259\" y=\"400\">\u0424\u0435\u0432\u0440\u0430\u043B\u044C</text>-->\n                <!--<text x=\"405\" y=\"400\">\u041C\u0430\u0440\u0442</text>-->\n                <!--<text x=\"551\" y=\"400\">\u0410\u043F\u0440\u0435\u043B\u044C</text>-->\n                <!--<text x=\"697\" y=\"400\">\u041C\u0430\u0439</text>-->\n\n                <!--<text x=\"843\" y=\"400\">\u0418\u044E\u043D\u044C</text>-->\n                <!--<text x=\"989\" y=\"400\">\u0418\u044E\u043B\u044C</text>-->\n                <!--<text x=\"1135\" y=\"400\">\u0410\u0432\u0433\u0443\u0441\u0442</text>-->\n                <!--<text x=\"1281\" y=\"400\">\u0421\u0435\u043D\u0442\u0430\u0431\u0440\u044C</text>-->\n                <!--<text x=\"1427\" y=\"400\">\u041E\u043A\u0442\u044F\u0431\u0440\u044C</text>-->\n\n                <!--<text x=\"1573\" y=\"400\">\u041D\u043E\u044F\u0431\u0440\u044C</text>-->\n                <!--<text x=\"1719\" y=\"400\">\u0414\u0435\u043A\u0430\u0431\u0440\u044C</text>-->\n\n                <text x=\"105\" y=\"425\" font-size=\"16px\">2015</text>\n            </g>\n\n\n            <g class=\"labels y-labels\">\n                <text x=\"70\" y=\"120\">80</text>\n                <text x=\"70\" y=\"180\">60</text>\n                <text x=\"70\" y=\"240\">40</text>\n                <text x=\"70\" y=\"300\">20</text>\n                <text x=\"70\" y=\"365\">0</text>\n            </g>\n        </svg>\n\n    ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map