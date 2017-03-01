import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
@Component({
  moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {


  constructor(private service: AppService) {

  }



}


