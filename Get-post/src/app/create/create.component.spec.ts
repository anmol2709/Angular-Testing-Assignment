

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule}           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterModule, Router, RouterOutletMap, ActivatedRoute} from '@angular/router';
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CreateComponent} from "./create.component";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {AppService} from "../app.service";

describe('CreateComponent', function () {
    let de: DebugElement;
    let comp: CreateComponent;
    let fixture: ComponentFixture<CreateComponent>;
    let router: Router;

    let service: AppService
    class MockRouter {

    }

    class MockActivatedRoute {

    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [  CreateComponent ],
            providers: [{provide: Router, useClass: MockRouter},{provide: ActivatedRoute, useClass: MockActivatedRoute},AppService,
                RouterOutletMap],
            imports: [BrowserModule, FormsModule, CommonModule, HttpModule, RouterModule]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateComponent);
        comp = fixture.componentInstance;
        service = fixture.debugElement.injector.get(AppService);
        router = fixture.debugElement.injector.get(Router);
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create component', () => expect(comp).toBeDefined() );


    it('it should be able to get data from service', () => {
        spyOn(service, 'getData').and.returnValue(
            Observable.of<any>(
                [{
                    date: '',
                    title: '',
                    description: '',
                    priority: '',
                    _id: ''
                }]
            )
        );

        expect(comp.task1).toEqual([{
            date: '12/12/12',
            title: 'Anmol',
            description: 'hi all',
            priority: 'high',
            _id: '123'
        }])
    });



   fit(' should be able to update data accordingly', () => {
        comp.index = '0';
        spyOn(window,'alert');
        spyOn(service, 'update').and.returnValue(
            Observable.of<any>(
                [{
                    date: '12/10/16',
                    title: 'Demo',
                    description: 'Demo1',
                    priority: 'high',
                    _id:'124'
                }]
            )
        );
        expect(comp.task1).toEqual([{
            date: '12/12/12',
            title: 'Anmol',
            description: 'hi all',
            priority: 'high',
            _id: '123'
        }])

    });
});
