"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var app_service_1 = require("../app.service");
var create_component_1 = require("./create.component");
describe('createComponent', function () {
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
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=create.component.specs.js.map