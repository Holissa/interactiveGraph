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
        <svg class="graph" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" (mousemove)="getPx($event.clientX)">

            
            <!--<g class="indicator" [ngStyle]="{'visibility': (indKey == true) ? 'visible' : 'hidden'}">-->

            <!--<g class="grid y-grid" id="yGrid" (mousemove)="getW($event)">-->
            <g class="grid y-grid" id="yGrid">
                <line x1="86" x2="95%" y1="126" y2="126"></line>
                <line x1="86" x2="95%" y1="185" y2="185"></line>
                <line x1="86" x2="95%" y1="243" y2="243"></line>
                <line x1="86" x2="95%" y1="301" y2="301"></line>
                <line x1="86" x2="95%" y1="360" y2="360"></line>
            </g>

            <!-------------------------------------------------------- GRAPH -------------------------------------------------------->
            <polyline id="poly"
                      fill="none"
                      stroke="#0074d9"
                      stroke-width="2"
                      points="
                            110,130       
                            120,135      
                            160,140  
                            170,125   
                            175,160     
                            185,165  
                            195,175  
                            205,165 
                            260,160 
                            290,150 
                            315,180 
                            320,155
                            395,175 
                            470,180 
                            500,170   
                            510,180  
                            520,165 
                            540,165 
                            550,185 
                            560,240  
                            580,240  
                            580,245  
                            625,245
                            650,300   
                            680,300  
                            690,305   
                            750,240   
                            760,260   
                            840,265  
                            860,250   
                            875,240    
                            895,255 
                            895,265  
                            910,250  
                            930,200  
                            945,185
                            960,205 
                            980,230  
                            1020,230   
                            1050,255  
                            1060,275 
                            1080,275  
                            1100,255 
                            1155,270 
                            1185,210 
                            1240,170
     "
            />
            <!-------------------------------------------------------- END GRAPH -------------------------------------------------------->


            
            <!-------------------------------------------------------- INDICATOR  -------------------------------------------------------->
            <circle class="shadow" [attr.cx]="pointCorX" [attr.cy]="pointCorY" r="5" stroke="#AAA" stroke-width="4"
                    stroke-opacity="1"></circle>
            
            <g>
                <filter id="dropShadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                    <feOffset dx="2" dy="4"/>
                    <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <rect [attr.x]="par" y="10" width="200" height="100" fill="white" filter="url(#dropShadow)"/>
                <text [attr.x]="par+70" y="22%" alignment-baseline="middle" text-anchor="middle">
                    {{pointCorX}}{{months[monthName - 1]}} 2015
                </text>
                <line class="indicator" [attr.x1]="pointCorX" y1="110" [attr.x2]="pointCorX" y2="380"></line>
            </g>


            <!-------------------------------------------------------- END INDICATOR  -------------------------------------------------------->

            
            <g class="labels x-labels">
                <text [attr.x]="item.value" [attr.y]="400" *ngFor="let item of items; let i=index; let last = last;"
                      (click)="getValue(i)">
                    {{item.name}}
                </text>
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
    par = 70;
    x = 0;
    indKey = false;
    monthName = 1;
    pointCorX = 110;
    d = document;
    pointCorY = 130;
    numDay = 1;

    items: Item[] =
        [
            {name: "Январь", value: 113},
            {name: "Февраль", value: 213},
            {name: "Март", value: 313},
            {name: "Апрель", value: 413},
            {name: "Май", value: 513},
            {name: "Июнь", value: 613},
            {name: "Июль", value: 713},
            {name: "Август", value: 813},
            {name: "Сентябрь", value: 913},
            {name: "Октябрь", value: 1013},
            {name: "Ноябрь", value: 1113},
            {name: "Декабрь", value: 1213}

        ];

    months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


    getValue(i) {
        var val = document.getElementsByTagName('text')[i].attributes['x'];
        var val = val.toString();
        console.log(typeof val);

    };

    getPx(event): void {
        this.par = event;
        this.monthName = Math.floor(this.par / 98);

        var polyline = this.d.getElementById('poly'),
            points = polyline.getAttribute('points'),
            reg = /\d+/g,
            coordinatAr = points.match(reg); //сформируем массив координат графика


        for (var i = 0, max = coordinatAr.length; i < max; i++) {
            if (i % 2 == 0) { //нам нужны координаты только по x
                if (this.par == Number(coordinatAr[i])) {
                    this.pointCorX = this.par;
                    this.pointCorY = Number(coordinatAr[i + 1]);
                    return;
                }
            }
        }


    };

    getW(event): void {
        // event.currentTarget.getBBox().width;
        var lineLength = event.currentTarget.getBBox().width; //длина линии
        // var monthLength = Math.floor(lineLength / 12); //найдем сколько пикселей приходиться на каждый месяц (98px)
        var monthLength = Math.floor(lineLength / 365); //найдем сколько пикселей приходиться на каждый день (3px)
        console.log(monthLength);


    };


    changedItem() {
        var count = 113;
        return function () {
            return count += 146;
        };
    };

    counter = this.changedItem();


}