import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TrainComponent } from './train.component';
import { RecogComponent } from './recog.component';
import { AsknameComponent } from './askname.component';
import { routing } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { SharedService } from './shareddataservice';

@NgModule({
  declarations: [
    AppComponent,TrainComponent,RecogComponent,AsknameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, routing
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
