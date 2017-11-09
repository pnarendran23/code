import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http, Response, URLSearchParams, Jsonp } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  daily = false
  dailyarr = []
  readings = []
  avg = []
  daily_readings = []
  arr = []
  monthlyurl = "https://um56510q29.execute-api.us-east-1.amazonaws.com/dev/analysis/129001/monthly/consumption?start=2017-01-01&end=2017-12-31&avg=True"
  dailyurl = "https://um56510q29.execute-api.us-east-1.amazonaws.com/dev/analysis/129001/daily/"
  loading = this.load.create(
    {
      content : "Please wait"
    }
  )
  constructor(public navCtrl: NavController, public load : LoadingController, public http : Http) {

  }

  chartOptions = {
    responsive: true,    
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
  };

  
  myColors = [
    {
      backgroundColor: ['rgba(208, 221, 61, 1)','rgba(208, 221, 61, 1)','rgba(208, 221, 61, 1)','rgba(208, 221, 61, 1)','rgba(208, 221, 61, 1)','rgba(208, 221, 61, 1)','rgba(208, 221, 61, 1)','rgba(208, 221, 61, 1)','rgba(208, 221, 61, 1)','rgba(208, 221, 61, 1)','rgba(208, 221, 61, 1)','rgba(208, 221, 61, 1)'],
      borderColor: 'rgba(208, 221, 61, 1)',
      pointBackgroundColor: 'rgba(208, 221, 61, 1)',
      pointBorderColor: 'rgba(208, 221, 61, 1)',
      pointHoverBackgroundColor: 'rgba(208, 221, 61, 1)',
      pointHoverBorderColor: 'rgba(208, 221, 61, 1)'
    },
    {
      backgroundColor: ['rgba(208, 221, 61, 0.62)','rgba(208, 221, 61, 0.62)','rgba(208, 221, 61, 0.62)','rgba(208, 221, 61, 0.62)','rgba(208, 221, 61, 0.62)','rgba(208, 221, 61, 0.62)','rgba(208, 221, 61, 0.62)','rgba(208, 221, 61, 0.62)','rgba(208, 221, 61, 0.62)','rgba(208, 221, 61, 0.62)','rgba(208, 221, 61, 0.62)','rgba(208, 221, 61, 0.62)'],
      borderColor: '#7c7c7c',
      pointBackgroundColor: 'rgba(208, 221, 61, 1)',
      pointBorderColor: '#7c7c7c',
      pointHoverBackgroundColor: 'rgba(208, 221, 61, 1)',
      pointHoverBorderColor: 'rgba(103, 58, 183, .2)'
    }
    // ...colors for additional data sets
  ];

  chartData = [
    { data: [], label: 'Readings'}
    ,{ data: [], label: 'Periodic average', type : "line" }
    //,{ data: [45, 67, 800, 500], label: 'Account C' }
  ];
   monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

tens(n){
  return n > 9 ? "" + n: "0" + n;
}

daysInMonth(month,year) {
  return new Date(year, month, 0).getDate();
}

getDaily(start_date){
  let headers = new Headers({ 'x-api-key': 'XEzpOcvczdaYZBUJg82U24j5ayAi9Lwn3cXfnfYQ','Content-Type':'application/json'});
  let options = new RequestOptions({ headers: headers });    
  var date = start_date
  var t = date.split(/[- :]/);
  
  // Apply each element to the Date function
  var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
  var actiondate = new Date(d);
  
  var mydate = new Date(d)//new Date(element["timestamp"])
  console.log('mydate '+mydate)  
  console.log('Simply number '+mydate.getMonth())
  var currentlabel = this.monthNames[mydate.getMonth()] + " "+ mydate.getFullYear()     
  console.log('URL is '+this.dailyurl+"consumption?start="+ mydate.getFullYear()+"-"+(this.tens(mydate.getMonth()+1)+"-01&end="+ mydate.getFullYear()+"-"+this.tens(mydate.getMonth()+1)+"-"+this.daysInMonth(mydate.getMonth()+1,mydate.getFullYear())+"&avg=True"))
  this.http.get(this.dailyurl+"consumption?start="+ mydate.getFullYear()+"-"+(this.tens(mydate.getMonth()+1)+"-01&end="+ mydate.getFullYear()+"-"+this.tens(mydate.getMonth()+1)+"-"+this.daysInMonth(mydate.getMonth()+1,mydate.getFullYear())+"&avg=True"),options)
  .map(response => response.json())
  .subscribe(
      data => {                        
          this.dailyarr = data['response']['records']
          console.log('daily '+JSON.stringify(this.dailyarr))

          var datearr = []
          var reading = []
          var average = []
          var color1 = []
          var color2 = []
          this.dailyarr.forEach(element => {
            reading.push(this.roundTo(element["reading"],2))  
            average.push(this.roundTo(element["periodavg"],2))                
            var date = element["timestamp"]
            var t = date.split(/[- :]/);
            
            // Apply each element to the Date function
            var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
            var actiondate = new Date(d);
            
            var mydate = new Date(d)//new Date(element["timestamp"])
            datearr.push(mydate.getDate() + " "+ this.monthNames[mydate.getMonth()] + ' '+mydate.getFullYear())
            color1.push('rgba(208, 221, 61, 1)')            
            color2.push('rgba(208, 221, 61, 0.62)')            
          });                           
          this.myColors[0].backgroundColor = []
          this.myColors[0].backgroundColor = color1
          this.myColors[1].backgroundColor = color2
          this.chartData[0].data = reading//[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
          this.chartData[0].label = 'Readings'    
          this.chartData[1].data = average//[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
          this.chartData[1].label = 'Periodic average'    
          this.chartData[1]['fill']= false 
          this.chartLabels = datearr//['January', 'February', 'March', 'April','May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
          this.loading.dismiss()
          this.daily = true    
      },//this.actualVisits = data,
      err => {console.log(err) 
        if(this.loading){
         this.loading.dismiss() 
        }
      },
      () => console.log('get actual visits complete')
   );
}
roundTo(n, digits) {
  if (digits === undefined) {
    digits = 0;
  }

  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  var test =(Math.round(n) / multiplicator);
  return +(test.toFixed(digits));
}
  
  getmonthlydata(){      
    let headers = new Headers({ 'x-api-key': 'XEzpOcvczdaYZBUJg82U24j5ayAi9Lwn3cXfnfYQ','Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });
    console.log(this.monthlyurl)
    this.http.get(this.monthlyurl,options)
    .map(response => response.json())
    .subscribe(
        data => {                                 
            this.arr = data['response']['records']  
            console.log(this.arr)      
            var datearr = []
            
            this.arr.forEach(element => {
              this.readings.push(this.roundTo(element["reading"],2))  
              this.avg.push(this.roundTo(element["periodavg"],2))                
              var date = element["timestamp"]
              var t = date.split(/[- :]/);
              
              // Apply each element to the Date function
              var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
              var actiondate = new Date(d);
              
              var mydate = new Date(d)//new Date(element["timestamp"])
              datearr.push(this.monthNames[mydate.getMonth()] + ' '+mydate.getFullYear())
            });                           
            this.chartData[0].data = this.readings//[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
            this.chartData[0].label = 'Readings'    
            this.chartData[1].data = this.avg//[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
            this.chartData[1].label = 'Periodic average'   
            this.chartData[1]['fill']= false 
            this.chartLabels = datearr//['January', 'February', 'March', 'April','May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
            if(this.loading){
            this.loading.dismiss()
            }
        },//this.actualVisits = data,
        err => {console.log(err)
          if(this.loading){
          this.loading.dismiss()
          }
        },
        () => {
        console.log('get actual visits complete')                
        } 
     );

}

  chartLabels = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August','September', 'October', 'November', 'December'];

  onChartClick(event) {
    console.log(event)
    if(this.daily == false){
    var str = ""
    if(event.active.length > 0){
      console.log(event.active[0]._view.label);
      var index = event.active[0]._index;
      var date = this.arr[index]["timestamp"]
      var t = date.split(/[- :]/);
      
      // Apply each element to the Date function
      var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
      var actiondate = new Date(d);
      
      var mydate = new Date(d)//new Date(element["timestamp"])      
      str = this.monthNames[mydate.getMonth()] + ' '+mydate.getFullYear()//event.active[0]._view.label;    
      console.log('Before '+ str) 
      if(str != undefined){ 
        this.daily = true    
        console.log('str '+ str)            
        this.chartData[0].label = str
        this.chartData[0].data = [1]//[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
        this.chartData[0].label = 'Readings'    
        this.chartData[1].data = [1]//[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
        this.chartData[1].label = 'Periodic average'   
        this.chartData[1]['fill']= false
        this.chartData = [
          { data: [], label: 'Readings'}
          ,{ data: [], label: 'Periodic average', type : "line" }
          //,{ data: [45, 67, 800, 500], label: 'Account C' }
        ];
        if(this.loading){
          this.loading.dismiss()
        }
        if(!this.loading){
          this.loading = this.load.create(
            {
              content : "Please wait"
            }
          )
        this.loading.present()
        }
        console.log('Before2 '+ str)        
        this.getDaily(date)
      }    
    }
    }
  }

  ngOnInit(){
    if(this.loading){
      this.loading.dismiss()
    }
    if(!this.loading){
      this.loading = this.load.create(
        {
          content : "Please wait"
        }
      )
    this.loading.present()
    }
    this.getmonthlydata()
  }

  goback(){
    var color1 = []
    var color2 = []
    this.daily = false
    var datearr = []
    this.readings = []
    this.avg = []
    this.arr.forEach(element => {
      this.readings.push(this.roundTo(element["reading"],2))  
      this.avg.push(this.roundTo(element["periodavg"],2))                
      var date = element["timestamp"]
      var t = date.split(/[- :]/);
      
      // Apply each element to the Date function
      var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
      var actiondate = new Date(d);
      
      var mydate = new Date(d)//new Date(element["timestamp"])
      datearr.push(this.monthNames[mydate.getMonth()] + ' '+mydate.getFullYear())
      color1.push('rgba(208, 221, 61, 1)')            
      color2.push('rgba(208, 221, 61, 0.62)')            
    });                           
    this.myColors[0].backgroundColor = []
    this.myColors[0].backgroundColor = color1
    this.myColors[1].backgroundColor = color2        
    this.chartData[0].data = this.readings//[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
    this.chartData[0].label = 'Readings'    
    this.chartData[1].data = this.readings//[330, 600, 260, 700,330, 600, 260, 700,330, 600, 260, 700]
    this.chartData[1].label = 'Periodic average'    
    this.chartLabels = datearr//['January', 'February', 'March', 'April','May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
  }

}
