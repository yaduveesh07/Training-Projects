import { Component, EventEmitter, Output } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { Profile } from './profile/profile';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { WFCserviceService } from './wfcservice.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: any;
  newdata: any;

  constructor(private wfcData: WFCserviceService) { }

  ngOnInit() {
    this.wfcData.weatherforcast().subscribe(data => {
      this.newdata = data
      console.log(this.newdata);
    })
  }
}