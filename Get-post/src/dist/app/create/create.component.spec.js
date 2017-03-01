"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var create_component_1 = require("./create.component");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var app_service_1 = require("../app.service");
describe('CreateComponent', function () {
    var de;
    var comp;
    var fixture;
    var router;
    var service;
    var MockRouter = (function () {
        function MockRouter() {
        }
        return MockRouter;
    }());
    var MockActivatedRoute = (function () {
        function MockActivatedRoute() {
        }
        return MockActivatedRoute;
    }());
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [create_component_1.CreateComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter }, { provide: router_1.ActivatedRoute, useClass: MockActivatedRoute }, app_service_1.AppService,
                router_1.RouterOutletMap],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, common_1.CommonModule, http_1.HttpModule, router_1.RouterModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(create_component_1.CreateComponent);
        comp = fixture.componentInstance;
        service = fixture.debugElement.injector.get(app_service_1.AppService);
        router = fixture.debugElement.injector.get(router_1.Router);
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('it should be able to get data from service', function () {
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.of([{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: ''
            }]));
        expect(comp.task1).toEqual([{
                date: '12/12/12',
                title: 'Anmol',
                description: 'hi all',
                priority: 'high',
                _id: '123'
            }]);
    });
    fit(' should be able to update data accordingly', function () {
        comp.index = '0';
        spyOn(window, 'alert');
        spyOn(service, 'update').and.returnValue(Observable_1.Observable.of([{
                date: '12/10/16',
                title: 'Demo',
                description: 'Demo1',
                priority: 'high',
                _id: '124'
            }]));
        expect(comp.task1).toEqual([{
                date: '12/12/12',
                title: 'Anmol',
                description: 'hi all',
                priority: 'high',
                _id: '123'
            }]);
    });
});
//# sourceMappingURL=create.component.spec.js.map