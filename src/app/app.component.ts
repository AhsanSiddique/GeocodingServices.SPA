import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../app/config.service';
import { weatherPeriod } from '../models/weatherPeriod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SPA';
  response : any = [];
  weatherPeriod : any = [];
  constructor(private configService: ConfigService){

  }

  
  txtSearch : string = "";
  getWearherSrvices() {
    this.configService.getWeatherForecast(this.txtSearch).subscribe((data : any)=>{
      this.weatherPeriod = data;
      if(this.response.length > 0){
        console.log(data);
      }
    });
  }
  
}
