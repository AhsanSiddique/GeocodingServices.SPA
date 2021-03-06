import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../app/config.service';
import { NgxSpinnerModule } from "ngx-spinner"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule      
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
