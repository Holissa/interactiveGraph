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
        <svg class="graph" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
             (mousemove)="getPx($event.clientX)">
            
            <g class="indicator">
                <line [attr.x1]="par" y1="110" [attr.x2]="par" y2="380"></line>
            </g>
            
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
                            110,130       
                            120,135      
                            160, 140  
                            170,125   
                            175,160     
                            185,165  
                            195,175  
                            205,165 
                            260, 160 
                            290, 150 
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
                            980, 230  
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


    getValue(i) {
        var val = document.getElementsByTagName('text')[i].attributes['x'];
        var val = val.toString();
        console.log(typeof val);

    };

    getPx(event): void {
        console.log(event);
        this.par = event;

    };

    changedItem() {
        var count = 113;
        return function () {
            return count += 146;
        };

    };

    counter = this.changedItem();


}