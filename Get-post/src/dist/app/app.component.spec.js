"use strict";
var app_component_1 = require('./app.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var home_component_1 = require("./home/home.component");
var create_component_1 = require("./create/create.component");
var show_component_1 = require("./show/show.component");
var app_service_1 = require("./app.service");
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
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
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, create_component_1.CreateComponent, show_component_1.ShowComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter }, { provide: router_1.ActivatedRoute, useClass: MockActivatedRoute }, app_service_1.AppService,
                router_1.RouterOutletMap],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, common_1.CommonModule, http_1.HttpModule, router_1.RouterModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=app.component.spec.js.map