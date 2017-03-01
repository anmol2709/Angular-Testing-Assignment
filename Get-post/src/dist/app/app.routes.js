"use strict";
var home_component_1 = require("./home/home.component");
var create_component_1 = require("./create/create.component");
var show_component_1 = require("./show/show.component");
exports.routes = [{
        path: 'home',
        component: home_component_1.HomeComponent
    }, {
        path: 'create',
        component: create_component_1.CreateComponent
    }, {
        path: 'edit/:i',
        component: create_component_1.CreateComponent
    }, {
        path: 'show',
        component: show_component_1.ShowComponent
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }];
//# sourceMappingURL=app.routes.js.map