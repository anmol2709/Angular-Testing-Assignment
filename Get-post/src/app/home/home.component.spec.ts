

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule}           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterModule, Router, RouterOutletMap, ActivatedRoute} from '@angular/router';
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {AppService} from "../app.service";

describe('HomeComponent', function () {
    let de: DebugElement;
    let comp: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let router: Router;

    let service: AppService
    class MockRouter {

    }

    class MockActivatedRoute {

    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [  HomeComponent ],
            providers: [{provide: Router, useClass: MockRouter},{provide: ActivatedRoute, useClass: MockActivatedRoute},AppService,
                RouterOutletMap],
            imports: [BrowserModule, FormsModule, CommonModule, HttpModule, RouterModule]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        comp = fixture.componentInstance;
        service = fixture.debugElement.injector.get(AppService);
        router = fixture.debugElement.injector.get(Router);
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create component', () => expect(comp).toBeDefined() );


});
