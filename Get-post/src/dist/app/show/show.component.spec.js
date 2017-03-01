"use strict";
var show_component_1 = require("./show.component");
var router_1 = require("@angular/router");
var testing_1 = require("@angular/router/testing");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require('@angular/platform-browser');
var app_service_1 = require("../app.service");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
describe('ShowComponent', function () {
    var de;
    var comp;
    var fixture;
    var service;
    var router;
    var MockRouter = (function () {
        function MockRouter() {
        }
        MockRouter.prototype.navigate = function () {
            return Promise.resolve(true);
        };
        return MockRouter;
    }());
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [show_component_1.ShowComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter }, router_1.RouterOutletMap, app_service_1.AppService],
            imports: [testing_1.RouterTestingModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(show_component_1.ShowComponent);
        comp = fixture.componentInstance;
        comp.tasks = [{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: ''
            }];
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        service = fixture.debugElement.injector.get(app_service_1.AppService);
        router = fixture.debugElement.injector.get(router_1.Router);
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
        comp.ngOnInit();
        expect(comp.tasks).toEqual([{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: ''
            }]);
    });
    //DELETING USING INDEX
    it('it should be able to delete data from service', function () {
        spyOn(window, "alert");
        spyOn(service, 'deleteByIndex').and.returnValue(Observable_1.Observable.of([{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: '1'
            }]));
        comp.done(0);
        expect(window.alert).toHaveBeenCalledWith('Task Removed');
        router.navigate([]).then(function (data) {
            expect(data).toBe(true);
        });
    });
    it('it should be able to edit data from service', function () {
        // spyOn(window, "alert");
        spyOn(service, 'update').and.returnValue(Observable_1.Observable.of([{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: ''
            }]));
        comp.edit(0);
        // expect(window.alert).toHaveBeenCalledWith('Task Edited');
        expect(comp.tasks).toEqual([{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: ''
            }]);
        router.navigate([]).then(function (data) {
            expect(data).toBe(true);
        });
    });
    it(' should alert error in case of error while deleting', function () {
        spyOn(window, 'alert');
        spyOn(service, 'delete').and.returnValue(Observable_1.Observable.throw(Error('Observable Error Occurs')));
        comp.done(0);
        expect(window.alert).toHaveBeenCalled();
    });
});
//# sourceMappingURL=show.component.spec.js.map