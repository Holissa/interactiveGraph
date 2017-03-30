import {Component} from '@angular/core';


export class Item {
    name: string;
    value: number;


    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;

    }
}

@Component({
    selector: 'my-app',
    template: `
        <svg class="graph" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">

            <g class="grid y-grid" id="yGrid">
                <line x1="86" x2="95%" y1="126" y2="126"></line>
                <line x1="86" x2="95%" y1="185" y2="185"></line>
                <line x1="86" x2="95%" y1="243" y2="243"></line>
                <line x1="86" x2="95%" y1="301" y2="301"></line>
                <line x1="86" x2="95%" y1="360" y2="360"></line>
            </g>


            <polyline
                    fill="none"
                    stroke="#0074d9"
                    stroke-width="2"
                    points="
       00,120
       20,60
       40,80
       60,20
       80,80
       100,80
       120,60
       140,100
       160,90
       180,80
       200, 110
       220, 10
       240, 70
       260, 100
       280, 100
       300, 40
       320, 0
       340, 100
       360, 100
       380, 120
       400, 60
       420, 70
       440, 80
     "
            />

            <use class="grid double" xlink:href="#xGrid" style=""></use>
            <use class="grid double" xlink:href="#yGrid" style=""></use>

            <g class="first_set points" data-setname="Our first data set">
                <circle cx="113" cy="192" data-value="7.2" r="5"></circle>
                <circle cx="259" cy="171" data-value="8.1" r="5"></circle>
                <circle cx="405" cy="179" data-value="7.7" r="5"></circle>
                <circle cx="551" cy="200" data-value="6.8" r="5"></circle>
                <circle cx="697" cy="204" data-value="6.7" r="5"></circle>
            </g>

            <g class="labels x-labels">
                <!--<text x="113" y="400" *ngFor="let item of items">{{item.name}}</text>-->
                <text [attr.x]="item.value" [attr.y]="400" *ngFor="let item of items; let i=index; let last = last;"(click)="getValue(i)">
                    {{item.name}}
                </text>
                <!--<text x="259" y="400">Февраль</text>-->
                <!--<text x="405" y="400">Март</text>-->
                <!--<text x="551" y="400">Апрель</text>-->
                <!--<text x="697" y="400">Май</text>-->

                <!--<text x="843" y="400">Июнь</text>-->
                <!--<text x="989" y="400">Июль</text>-->
                <!--<text x="1135" y="400">Август</text>-->
                <!--<text x="1281" y="400">Сентабрь</text>-->
                <!--<text x="1427" y="400">Октябрь</text>-->

                <!--<text x="1573" y="400">Ноябрь</text>-->
                <!--<text x="1719" y="400">Декабрь</text>-->

                <text x="105" y="425" font-size="16px">2015</text>
            </g>


            <g class="labels y-labels">
                <text x="70" y="120">80</text>
                <text x="70" y="180">60</text>
                <text x="70" y="240">40</text>
                <text x="70" y="300">20</text>
                <text x="70" y="365">0</text>
            </g>
        </svg>

    `,
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    items: Item[] =
        [
            {name: "Январь", value: 113},
            {name: "Февраль", value: 259},
            {name: "Март", value: 405},
            {name: "Апрель", value: 551},
            {name: "Май", value: 697},
            {name: "Июнь", value: 843},
            {name: "Июль", value: 989},
            {name: "Август", value: 1135},
            {name: "Сентябрь", value: 1281},
            {name: "Октябрь", value: 1427},
            {name: "Ноябрь", value: 1573},
            {name: "Декабрь", value: 1719}
        ];


    getValue(i) {
        var val = document.getElementsByTagName('text')[i].attributes['x'];
        var val = val.toString();
        console.log(typeof val);

    }

    changedItem() {
        var count = 113;
        return function () {
            return count += 146;
        };

    };

    counter = this.changedItem();


}