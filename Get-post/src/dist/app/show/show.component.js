"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_service_1 = require("../app.service");
var ShowComponent = (function () {
    function ShowComponent(router, service) {
        this.router = router;
        this.service = service;
        this.tasks = [];
    }
    ShowComponent.prototype.ngOnInit = function () {
        // this.tasks = this.service.tasks;
        this.service.getData();
    };
    ShowComponent.prototype.edit = function (i) {
        //  alert("Editing task: "+this.tasks[i].title)
        alert('Task Edited');
        this.router.navigate(['edit', this.tasks[i]._id]);
    };
    ShowComponent.prototype.done = function (i) {
        var _this = this;
        //    alert("Deleting task: "+this.tasks[i]._id)
        alert('Task Removed');
        this.service.delete(this.tasks[i]._id).subscribe(function (data1) {
            // this.tasks = data1;
            _this.pageRefresh();
        }, function (e) {
            alert(e);
        });
    };
    ShowComponent.prototype.goHome = function () {
        this.router.navigate(['home']);
    };
    ShowComponent.prototype.pageRefresh = function () {
        var _this = this;
        this.service.getData().subscribe(function (data1) {
            _this.tasks = data1;
            // alert(this.tasks[0])
            // this.task = this.task1[this.index]
            alert("Data Updated.");
        }, function (e) {
            alert(e);
        });
    };
    ShowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'show',
            templateUrl: './show.component.html',
            styleUrls: ['./show.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_1.AppService])
    ], ShowComponent);
    return ShowComponent;
}());
exports.ShowComponent = ShowComponent;
//# sourceMappingURL=show.component.js.map