import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <svg class="graph" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" (mousemove)="getPx($event.clientX)">
            
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
                <rect [attr.x]="(pointCorX > 1080) ? pointCorX -200 : pointCorX" [attr.y]="pointCorY-120" width="200"
                      height="100" fill="white" filter="url(#dropShadow)"/>
                <text [attr.x]="(pointCorX > 1080) ? pointCorX-100 : pointCorX+100" [attr.y]="pointCorY-100"
                      alignment-baseline="middle" text-anchor="middle">
                    {{numDay}}{{months[monthName - 1]}} 2015
                </text>
                <line class="indicator" [attr.x1]="pointCorX" [attr.y1]="pointCorY" [attr.x2]="pointCorX"
                      y2="360"></line>
            </g>


            <!-------------------------------------------------------- END INDICATOR  -------------------------------------------------------->


            <g class="labels x-labels">
                <text [attr.x]="113+(100*i)" [attr.y]="400" *ngFor="let month of months; let i=index;">
                    {{month}}
                </text>
                <text x="105" y="425" font-size="16px">2015</text>
            </g>

            <g class="labels y-labels">
                <text x="70" [attr.y]="120+(60*i)" *ngFor="let scale of scales; let i=index;">
                    {{scale}}
                </text>
            </g>
            
            
        </svg>

    `,
    styleUrls: ['app/app.component.css']
})

export class AppComponent {



    d = document;
    par; //координата по x, на которой мы находимся
    indKey = false;
    pointCorX = 110; //координаты контрольной точки по x
    pointCorY = 130;//координаты контрольной точки по у
    monthName = 1;
    numDay = 1;
    regX = /\s\d+/g;// для поиска координат по x
    regY = /,\d+/g;// для поиска координат по y
    polyline;
    points;
    coordinatArX; //массив координат графика по x
    coordinatArY;//массив координат графика по y



// ----------------------------------------------------------- DATA -----------------------------------------------------------

    scales = [80, 60, 40, 20, 0];
    months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    days = [
        {day: 2, dollar: 64, value: 0.52},
        {day: 13, dollar: 62, value: 0.52},
        {day: 21, dollar: 61, value: 0.52},
        {day: 4, dollar: 64, value: 0.52},
        {day: 18, dollar: 62, value: 0.52},
        {day: 3, dollar: 64, value: 0.52},
        {day: 10, dollar: 62, value: 0.52},
        {day: 10, dollar: 64, value: 0.52},
        {day: 7, dollar: 62, value: 0.52},
        {day: 2, dollar: 64, value: 0.52},
        {day: 13, dollar: 62, value: 0.52},
        {day: 28, dollar: 64, value: 0.52},
        {day: 15, dollar: 62, value: 0.52},
        {day: 2, dollar: 64, value: 0.52},
        {day: 14, dollar: 62, value: 0.52},
        {day: 5, dollar: 64, value: 0.52},
        {day: 27, dollar: 62, value: 0.52},
        {day: 2, dollar: 64, value: 0.52},
        {day: 13, dollar: 62, value: 0.52},
        {day: 5, dollar: 64, value: 0.52},
        {day: 11, dollar: 62, value: 0.52},
        {day: 25, dollar: 64, value: 0.52},
        {day: 13, dollar: 62, value: 0.52},
        {day: 21, dollar: 61, value: 0.52},
        {day: 2, dollar: 64, value: 0.52},
        {day: 1, dollar: 62, value: 0.52},
        {day: 9, dollar: 64, value: 0.52},
        {day: 15, dollar: 62, value: 0.52},
        {day: 22, dollar: 64, value: 0.52},
        {day: 13, dollar: 62, value: 0.52},
        {day: 2, dollar: 64, value: 0.52},
        {day: 6, dollar: 62, value: 0.52},
        {day: 12, dollar: 64, value: 0.52},
        {day: 14, dollar: 62, value: 0.52},
        {day: 23, dollar: 64, value: 0.52},
        {day: 13, dollar: 62, value: 0.52},
        {day: 2, dollar: 64, value: 0.52},
        {day: 10, dollar: 62, value: 0.52},
        {day: 14, dollar: 64, value: 0.52},
        {day: 23, dollar: 62, value: 0.52},
        {day: 2, dollar: 64, value: 0.52},
        {day: 13, dollar: 62, value: 0.52},
        {day: 3, dollar: 62, value: 0.52},
        {day: 27, dollar: 64, value: 0.52},
        {day: 13, dollar: 62, value: 0.52},
        {day: 2, dollar: 64, value: 0.52},
        {day: 13, dollar: 62, value: 0.52}

    ];

    // ----------------------------------------------------------- END DATA -----------------------------------------------------------

    getPx(event) {
        if (event < 110) {
            this.par = 110;
        }
        this.par = event;
        this.monthName = Math.floor(this.par / 98);

        this.getPolylineAr();

        for (let i = 0, max = this.coordinatArX.length; i < max; i++) {
            if (this.par == Number(this.coordinatArX[i])) {
                this.pointCorX = this.par;
                this.pointCorY = Number(this.coordinatArY[i]);
                this.numDay = this.days[i].day;
                return;
            }
        }

    };


    getPolylineAr() {
        if(this.indKey === true){
            return;
        }
        else{
            this.polyline = this.d.getElementById('poly');
            this.points = this.polyline.getAttribute('points');
            // regY = /\d+/g;// для поиска всех координат (и по x и по y)

            this.coordinatArX = this.points.match(this.regX), //сформируем массив координат графика по x
                this.coordinatArY = this.points.match(this.regY).join('').split(','); //сформируем массив координат графика по у (добавляет в массив координаты вместе с запятой,
            // убираем их с помощью манипуляций с join и split)

            this.coordinatArY.splice(0, 1);//так как обрезает по ',', первый элемент массива оказывается пустым, удаляем его из массива
            this.indKey = true;
        }
    };


    getW(event) {
        // event.currentTarget.getBBox().width;
        let lineLength = event.currentTarget.getBBox().width; //длина линии
        // var monthLength = Math.floor(lineLength / 12); //найдем сколько пикселей приходиться на каждый месяц (98px)
        let monthLength = Math.floor(lineLength / 365); //найдем сколько пикселей приходиться на каждый день (3px)
        console.log(monthLength);
    };//функция для получения количества пикселей на месяц и на день


}