"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var home_component_1 = require("./home.component");
require("rxjs/add/observable/of");
var app_service_1 = require("../app.service");
describe('HomeComponent', function () {
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
            declarations: [home_component_1.HomeComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter }, { provide: router_1.ActivatedRoute, useClass: MockActivatedRoute }, app_service_1.AppService,
                router_1.RouterOutletMap],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, common_1.CommonModule, http_1.HttpModule, router_1.RouterModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(home_component_1.HomeComponent);
        comp = fixture.componentInstance;
        service = fixture.debugElement.injector.get(app_service_1.AppService);
        router = fixture.debugElement.injector.get(router_1.Router);
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=home.component.spec.js.map