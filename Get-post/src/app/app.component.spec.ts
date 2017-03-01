
import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule}           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterModule, Router, RouterOutletMap, ActivatedRoute} from '@angular/router';
import {HttpModule} from "@angular/http";
import {routes} from "./app.routes";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home/home.component";
import {CreateComponent} from "./create/create.component";
import {ShowComponent} from "./show/show.component";
import {AppService} from "./app.service";

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  class MockRouter {

  }

  class MockActivatedRoute {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent , HomeComponent, CreateComponent ,ShowComponent],
      providers: [{provide: Router, useClass: MockRouter},{provide: ActivatedRoute, useClass: MockActivatedRoute},AppService,
        RouterOutletMap],
      imports: [BrowserModule, FormsModule, CommonModule, HttpModule, RouterModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

});
