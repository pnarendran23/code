webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, load, http) {
        this.navCtrl = navCtrl;
        this.load = load;
        this.http = http;
        this.daily = false;
        this.dailyarr = [];
        this.readings = [];
        this.avg = [];
        this.daily_readings = [];
        this.arr = [];
        this.monthlyurl = "https://um56510q29.execute-api.us-east-1.amazonaws.com/dev/analysis/129001/monthly/consumption?start=2017-01-01&end=2017-12-31&avg=True";
        this.dailyurl = "https://um56510q29.execute-api.us-east-1.amazonaws.com/dev/analysis/129001/daily/";
        this.loading = this.load.create({
            content: "Please wait"
        });
        this.chartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.myColors = [
            {
                backgroundColor: ['rgba(208, 221, 61, 1)', 'rgba(208, 221, 61, 1)', 'rgba(208, 221, 61, 1)', 'rgba(208, 221, 61, 1)', 'rgba(208, 221, 61, 1)', 'rgba(208, 221, 61, 1)', 'rgba(208, 221, 61, 1)', 'rgba(208, 221, 61, 1)', 'rgba(208, 221, 61, 1)', 'rgba(208, 221, 61, 1)', 'rgba(208, 221, 61, 1)', 'rgba(208, 221, 61, 1)'],
                borderColor: 'rgba(208, 221, 61, 1)',
                pointBackgroundColor: 'rgba(208, 221, 61, 1)',
                pointBorderColor: 'rgba(208, 221, 61, 1)',
                pointHoverBackgroundColor: 'rgba(208, 221, 61, 1)',
                pointHoverBorderColor: 'rgba(208, 221, 61, 1)'
            },
            {
                backgroundColor: ['rgba(208, 221, 61, 0.62)', 'rgba(208, 221, 61, 0.62)', 'rgba(208, 221, 61, 0.62)', 'rgba(208, 221, 61, 0.62)', 'rgba(208, 221, 61, 0.62)', 'rgba(208, 221, 61, 0.62)', 'rgba(208, 221, 61, 0.62)', 'rgba(208, 221, 61, 0.62)', 'rgba(208, 221, 61, 0.62)', 'rgba(208, 221, 61, 0.62)', 'rgba(208, 221, 61, 0.62)', 'rgba(208, 221, 61, 0.62)'],
                borderColor: '#7c7c7c',
                pointBackgroundColor: 'rgba(208, 221, 61, 1)',
                pointBorderColor: '#7c7c7c',
                pointHoverBackgroundColor: 'rgba(208, 221, 61, 1)',
                pointHoverBorderColor: 'rgba(103, 58, 183, .2)'
            }
            // ...colors for additional data sets
        ];
        this.chartData = [
            { data: [], label: 'Readings' },
            { data: [], label: 'Periodic average', type: "line" }
            //,{ data: [45, 67, 800, 500], label: 'Account C' }
        ];
        this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        this.chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
    HomePage.prototype.tens = function (n) {
        return n > 9 ? "" + n : "0" + n;
    };
    HomePage.prototype.daysInMonth = function (month, year) {
        return new Date(year, month, 0).getDate();
    };
    HomePage.prototype.getDaily = function (start_date) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'x-api-key': 'XEzpOcvczdaYZBUJg82U24j5ayAi9Lwn3cXfnfYQ', 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var date = start_date;
        var t = date.split(/[- :]/);
        // Apply each element to the Date function
        var d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
        var actiondate = new Date(d);
        var mydate = new Date(d); //new Date(element["timestamp"])
        console.log('mydate ' + mydate);
        console.log('Simply number ' + mydate.getMonth());
        var currentlabel = this.monthNames[mydate.getMonth()] + " " + mydate.getFullYear();
        console.log('URL is ' + this.dailyurl + "consumption?start=" + mydate.getFullYear() + "-" + (this.tens(mydate.getMonth() + 1) + "-01&end=" + mydate.getFullYear() + "-" + this.tens(mydate.getMonth() + 1) + "-" + this.daysInMonth(mydate.getMonth() + 1, mydate.getFullYear()) + "&avg=True"));
        this.http.get(this.dailyurl + "consumption?start=" + mydate.getFullYear() + "-" + (this.tens(mydate.getMonth() + 1) + "-01&end=" + mydate.getFullYear() + "-" + this.tens(mydate.getMonth() + 1) + "-" + this.daysInMonth(mydate.getMonth() + 1, mydate.getFullYear()) + "&avg=True"), options)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.dailyarr = data['response']['records'];
            console.log('daily ' + JSON.stringify(_this.dailyarr));
            var datearr = [];
            var reading = [];
            var average = [];
            var color1 = [];
            var color2 = [];
            _this.dailyarr.forEach(function (element) {
                reading.push(_this.roundTo(element["reading"], 2));
                average.push(_this.roundTo(element["periodavg"], 2));
                var date = element["timestamp"];
                var t = date.split(/[- :]/);
                // Apply each element to the Date function
                var d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
                var actiondate = new Date(d);
                var mydate = new Date(d); //new Date(element["timestamp"])
                datearr.push(mydate.getDate() + " " + _this.monthNames[mydate.getMonth()] + ' ' + mydate.getFullYear());
                color1.push('rgba(208, 221, 61, 1)');
                color2.push('rgba(208, 221, 61, 0.62)');
            });
            _this.myColors[0].backgroundColor = [];
            _this.myColors[0].backgroundColor = color1;
            _this.myColors[1].backgroundColor = color2;
            _this.chartData[0].data = reading; //[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
            _this.chartData[0].label = 'Readings';
            _this.chartData[1].data = average; //[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
            _this.chartData[1].label = 'Periodic average';
            _this.chartData[1]['fill'] = false;
            _this.chartLabels = datearr; //['January', 'February', 'March', 'April','May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
            _this.loading.dismiss();
            _this.daily = true;
        }, //this.actualVisits = data,
        function (//this.actualVisits = data,
            err) {
            console.log(err);
            if (_this.loading) {
                _this.loading.dismiss();
            }
        }, function () { return console.log('get actual visits complete'); });
    };
    HomePage.prototype.roundTo = function (n, digits) {
        if (digits === undefined) {
            digits = 0;
        }
        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        var test = (Math.round(n) / multiplicator);
        return +(test.toFixed(digits));
    };
    HomePage.prototype.getmonthlydata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'x-api-key': 'XEzpOcvczdaYZBUJg82U24j5ayAi9Lwn3cXfnfYQ', 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(this.monthlyurl);
        this.http.get(this.monthlyurl, options)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.arr = data['response']['records'];
            console.log(_this.arr);
            var datearr = [];
            _this.arr.forEach(function (element) {
                _this.readings.push(_this.roundTo(element["reading"], 2));
                _this.avg.push(_this.roundTo(element["periodavg"], 2));
                var date = element["timestamp"];
                var t = date.split(/[- :]/);
                // Apply each element to the Date function
                var d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
                var actiondate = new Date(d);
                var mydate = new Date(d); //new Date(element["timestamp"])
                datearr.push(_this.monthNames[mydate.getMonth()] + ' ' + mydate.getFullYear());
            });
            _this.chartData[0].data = _this.readings; //[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
            _this.chartData[0].label = 'Readings';
            _this.chartData[1].data = _this.avg; //[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
            _this.chartData[1].label = 'Periodic average';
            _this.chartData[1]['fill'] = false;
            _this.chartLabels = datearr; //['January', 'February', 'March', 'April','May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
            if (_this.loading) {
                _this.loading.dismiss();
            }
        }, //this.actualVisits = data,
        function (//this.actualVisits = data,
            err) {
            console.log(err);
            if (_this.loading) {
                _this.loading.dismiss();
            }
        }, function () {
            console.log('get actual visits complete');
        });
    };
    HomePage.prototype.onChartClick = function (event) {
        console.log(event);
        if (this.daily == false) {
            var str = "";
            if (event.active.length > 0) {
                console.log(event.active[0]._view.label);
                var index = event.active[0]._index;
                var date = this.arr[index]["timestamp"];
                var t = date.split(/[- :]/);
                // Apply each element to the Date function
                var d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
                var actiondate = new Date(d);
                var mydate = new Date(d); //new Date(element["timestamp"])      
                str = this.monthNames[mydate.getMonth()] + ' ' + mydate.getFullYear(); //event.active[0]._view.label;    
                console.log('Before ' + str);
                if (str != undefined) {
                    this.daily = true;
                    console.log('str ' + str);
                    this.chartData[0].label = str;
                    this.chartData[0].data = [1]; //[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
                    this.chartData[0].label = 'Readings';
                    this.chartData[1].data = [1]; //[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
                    this.chartData[1].label = 'Periodic average';
                    this.chartData[1]['fill'] = false;
                    this.chartData = [
                        { data: [], label: 'Readings' },
                        { data: [], label: 'Periodic average', type: "line" }
                        //,{ data: [45, 67, 800, 500], label: 'Account C' }
                    ];
                    if (this.loading) {
                        this.loading.dismiss();
                    }
                    if (!this.loading) {
                        this.loading = this.load.create({
                            content: "Please wait"
                        });
                        this.loading.present();
                    }
                    console.log('Before2 ' + str);
                    this.getDaily(date);
                }
            }
        }
    };
    HomePage.prototype.ngOnInit = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
        if (!this.loading) {
            this.loading = this.load.create({
                content: "Please wait"
            });
            this.loading.present();
        }
        this.getmonthlydata();
    };
    HomePage.prototype.goback = function () {
        var _this = this;
        var color1 = [];
        var color2 = [];
        this.daily = false;
        var datearr = [];
        this.readings = [];
        this.avg = [];
        this.arr.forEach(function (element) {
            _this.readings.push(_this.roundTo(element["reading"], 2));
            _this.avg.push(_this.roundTo(element["periodavg"], 2));
            var date = element["timestamp"];
            var t = date.split(/[- :]/);
            // Apply each element to the Date function
            var d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
            var actiondate = new Date(d);
            var mydate = new Date(d); //new Date(element["timestamp"])
            datearr.push(_this.monthNames[mydate.getMonth()] + ' ' + mydate.getFullYear());
            color1.push('rgba(208, 221, 61, 1)');
            color2.push('rgba(208, 221, 61, 0.62)');
        });
        this.myColors[0].backgroundColor = [];
        this.myColors[0].backgroundColor = color1;
        this.myColors[1].backgroundColor = color2;
        this.chartData[0].data = this.readings; //[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
        this.chartData[0].label = 'Readings';
        this.chartData[1].data = this.readings; //[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
        this.chartData[1].label = 'Periodic average';
        this.chartLabels = datearr; //['January', 'February', 'March', 'April','May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/group10/Desktop/sample_ionic/charts/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Charts app\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div style="width: 90%;">\n    <button ion-button float-right *ngIf = "daily" (click) = "goback()" color = "dark"><< Monthly Readings</button>\n    <canvas id="createCurrYearHccGapChart"\n        baseChart\n        [chartType]="\'bar\'"\n        [datasets]="chartData"\n        [labels]="chartLabels"\n        [options]="chartOptions"        \n        [colors] = "myColors"\n        [legend]="true"\n        (chartClick)="onChartClick($event)">\n    </canvas>\n    \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/group10/Desktop/sample_ionic/charts/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(341);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 206,
	"./af.js": 206,
	"./ar": 207,
	"./ar-dz": 208,
	"./ar-dz.js": 208,
	"./ar-kw": 209,
	"./ar-kw.js": 209,
	"./ar-ly": 210,
	"./ar-ly.js": 210,
	"./ar-ma": 211,
	"./ar-ma.js": 211,
	"./ar-sa": 212,
	"./ar-sa.js": 212,
	"./ar-tn": 213,
	"./ar-tn.js": 213,
	"./ar.js": 207,
	"./az": 214,
	"./az.js": 214,
	"./be": 215,
	"./be.js": 215,
	"./bg": 216,
	"./bg.js": 216,
	"./bn": 217,
	"./bn.js": 217,
	"./bo": 218,
	"./bo.js": 218,
	"./br": 219,
	"./br.js": 219,
	"./bs": 220,
	"./bs.js": 220,
	"./ca": 221,
	"./ca.js": 221,
	"./cs": 222,
	"./cs.js": 222,
	"./cv": 223,
	"./cv.js": 223,
	"./cy": 224,
	"./cy.js": 224,
	"./da": 225,
	"./da.js": 225,
	"./de": 226,
	"./de-at": 227,
	"./de-at.js": 227,
	"./de-ch": 228,
	"./de-ch.js": 228,
	"./de.js": 226,
	"./dv": 229,
	"./dv.js": 229,
	"./el": 230,
	"./el.js": 230,
	"./en-au": 231,
	"./en-au.js": 231,
	"./en-ca": 232,
	"./en-ca.js": 232,
	"./en-gb": 233,
	"./en-gb.js": 233,
	"./en-ie": 234,
	"./en-ie.js": 234,
	"./en-nz": 235,
	"./en-nz.js": 235,
	"./eo": 236,
	"./eo.js": 236,
	"./es": 237,
	"./es-do": 238,
	"./es-do.js": 238,
	"./es.js": 237,
	"./et": 239,
	"./et.js": 239,
	"./eu": 240,
	"./eu.js": 240,
	"./fa": 241,
	"./fa.js": 241,
	"./fi": 242,
	"./fi.js": 242,
	"./fo": 243,
	"./fo.js": 243,
	"./fr": 244,
	"./fr-ca": 245,
	"./fr-ca.js": 245,
	"./fr-ch": 246,
	"./fr-ch.js": 246,
	"./fr.js": 244,
	"./fy": 247,
	"./fy.js": 247,
	"./gd": 248,
	"./gd.js": 248,
	"./gl": 249,
	"./gl.js": 249,
	"./gom-latn": 250,
	"./gom-latn.js": 250,
	"./he": 251,
	"./he.js": 251,
	"./hi": 252,
	"./hi.js": 252,
	"./hr": 253,
	"./hr.js": 253,
	"./hu": 254,
	"./hu.js": 254,
	"./hy-am": 255,
	"./hy-am.js": 255,
	"./id": 256,
	"./id.js": 256,
	"./is": 257,
	"./is.js": 257,
	"./it": 258,
	"./it.js": 258,
	"./ja": 259,
	"./ja.js": 259,
	"./jv": 260,
	"./jv.js": 260,
	"./ka": 261,
	"./ka.js": 261,
	"./kk": 262,
	"./kk.js": 262,
	"./km": 263,
	"./km.js": 263,
	"./kn": 264,
	"./kn.js": 264,
	"./ko": 265,
	"./ko.js": 265,
	"./ky": 266,
	"./ky.js": 266,
	"./lb": 267,
	"./lb.js": 267,
	"./lo": 268,
	"./lo.js": 268,
	"./lt": 269,
	"./lt.js": 269,
	"./lv": 270,
	"./lv.js": 270,
	"./me": 271,
	"./me.js": 271,
	"./mi": 272,
	"./mi.js": 272,
	"./mk": 273,
	"./mk.js": 273,
	"./ml": 274,
	"./ml.js": 274,
	"./mr": 275,
	"./mr.js": 275,
	"./ms": 276,
	"./ms-my": 277,
	"./ms-my.js": 277,
	"./ms.js": 276,
	"./my": 278,
	"./my.js": 278,
	"./nb": 279,
	"./nb.js": 279,
	"./ne": 280,
	"./ne.js": 280,
	"./nl": 281,
	"./nl-be": 282,
	"./nl-be.js": 282,
	"./nl.js": 281,
	"./nn": 283,
	"./nn.js": 283,
	"./pa-in": 284,
	"./pa-in.js": 284,
	"./pl": 285,
	"./pl.js": 285,
	"./pt": 286,
	"./pt-br": 287,
	"./pt-br.js": 287,
	"./pt.js": 286,
	"./ro": 288,
	"./ro.js": 288,
	"./ru": 289,
	"./ru.js": 289,
	"./sd": 290,
	"./sd.js": 290,
	"./se": 291,
	"./se.js": 291,
	"./si": 292,
	"./si.js": 292,
	"./sk": 293,
	"./sk.js": 293,
	"./sl": 294,
	"./sl.js": 294,
	"./sq": 295,
	"./sq.js": 295,
	"./sr": 296,
	"./sr-cyrl": 297,
	"./sr-cyrl.js": 297,
	"./sr.js": 296,
	"./ss": 298,
	"./ss.js": 298,
	"./sv": 299,
	"./sv.js": 299,
	"./sw": 300,
	"./sw.js": 300,
	"./ta": 301,
	"./ta.js": 301,
	"./te": 302,
	"./te.js": 302,
	"./tet": 303,
	"./tet.js": 303,
	"./th": 304,
	"./th.js": 304,
	"./tl-ph": 305,
	"./tl-ph.js": 305,
	"./tlh": 306,
	"./tlh.js": 306,
	"./tr": 307,
	"./tr.js": 307,
	"./tzl": 308,
	"./tzl.js": 308,
	"./tzm": 309,
	"./tzm-latn": 310,
	"./tzm-latn.js": 310,
	"./tzm.js": 309,
	"./uk": 311,
	"./uk.js": 311,
	"./ur": 312,
	"./ur.js": 312,
	"./uz": 313,
	"./uz-latn": 314,
	"./uz-latn.js": 314,
	"./uz.js": 313,
	"./vi": 315,
	"./vi.js": 315,
	"./x-pseudo": 316,
	"./x-pseudo.js": 316,
	"./yo": 317,
	"./yo.js": 317,
	"./zh-cn": 318,
	"./zh-cn.js": 318,
	"./zh-hk": 319,
	"./zh-hk.js": 319,
	"./zh-tw": 320,
	"./zh-tw.js": 320
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 421;

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/group10/Desktop/sample_ionic/charts/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/group10/Desktop/sample_ionic/charts/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[322]);
//# sourceMappingURL=main.js.map
