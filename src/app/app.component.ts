import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../app/config.service';
import { weatherPeriod } from '../models/weatherPeriod';
import { NgxSpinnerService } from "ngx-spinner"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SPA';
  response : any = [];
  weatherPeriod : any = [];
  responseFlag : boolean = false;
  constructor(private configService: ConfigService, private SpinnerService: NgxSpinnerService){

  }

  
  txtSearch : string = "";
  getWearherSrvices() {
    debugger
    if(this.txtSearch != "")
    {
      this.SpinnerService.show(); 
      this.configService.getWeatherForecast(this.txtSearch).subscribe((data : any)=>{
        this.weatherPeriod = data;
        this.SpinnerService.hide(); 
        this.responseFlag = true;
      });
    }
  }
  
}
