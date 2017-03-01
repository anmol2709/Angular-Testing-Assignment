import {ShowComponent} from "./show.component";
import {RouterOutletMap, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {async, TestBed, ComponentFixture} from "@angular/core/testing";
import {By}           from '@angular/platform-browser';
import {DebugElement} from "@angular/core";
import {AppService} from "../app.service";
import {HttpModule} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

describe('ShowComponent', function () {
    let de: DebugElement;
    let comp: ShowComponent;
    let fixture: ComponentFixture<ShowComponent>;
    let service: AppService;
    let router: Router;


    class MockRouter {
        navigate(): Promise<boolean> {
            return Promise.resolve(true)
        }
    }


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShowComponent],
            providers: [{provide: Router, useClass: MockRouter}, RouterOutletMap, AppService],
            imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShowComponent);
        comp = fixture.componentInstance;
        comp.tasks = [{
            date: '',
            title: '',
            description: '',
            priority: '',
            _id: ''
        }]
        de = fixture.debugElement.query(By.css('h1'));
        service = fixture.debugElement.injector.get(AppService);
        router = fixture.debugElement.injector.get(Router);

    });

    it('should create component', () => expect(comp).toBeDefined());


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
        comp.ngOnInit();
        expect(comp.tasks).toEqual([{
            date: '',
            title: '',
            description: '',
            priority: '',
            _id: ''
        }])
    });




//DELETING USING INDEX
    it('it should be able to delete data from service', () => {
        spyOn(window, "alert");
        spyOn(service, 'deleteByIndex').and.returnValue(
            Observable.of<any>(
                [{
                    date: '',
                    title: '',
                    description: '',
                    priority: '',
                    _id: '1'
                }]
            )
        );
        comp.done(0);
        expect(window.alert).toHaveBeenCalledWith('Task Removed');
        router.navigate([]).then(data => {
            expect(data).toBe(true);
        })

    });

    it('it should be able to edit data from service', () => {
        // spyOn(window, "alert");
        spyOn(service, 'update').and.returnValue(
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
        comp.edit(0);
        // expect(window.alert).toHaveBeenCalledWith('Task Edited');
        expect(comp.tasks).toEqual([{
            date: '',
            title: '',
            description: '',
            priority: '',
            _id: ''
        }])
        router.navigate([]).then(data => {
            expect(data).toBe(true);
        })

    });


    it(' should alert error in case of error while deleting', () => {
        spyOn(window, 'alert');
        spyOn(service, 'delete').and.returnValue(
            Observable.throw(Error('Observable Error Occurs'))
        );
        comp.done(0);
        expect(window.alert).toHaveBeenCalled();
    });
});