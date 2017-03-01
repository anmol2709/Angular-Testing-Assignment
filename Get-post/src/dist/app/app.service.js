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
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/observable/of');
require('rxjs/add/observable/throw');
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.tasks = [];
        this.taskArray = [];
    }
    AppService.prototype.add = function (task) {
        // this.tasks.push(task);
        var _this = this;
        var obj = {
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://localhost:9000/add', obj, { headers: jsonHeaders }).map(function (response) {
            return _this.extractData(response);
        }).catch(function (e) {
            alert("error");
            return Observable_1.Observable.throw(new Error("error"));
        });
    };
    AppService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    AppService.prototype.update = function (task) {
        var _this = this;
        var obj = {
            _id: task._id,
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://localhost:9000/update', obj, { headers: jsonHeaders }).map(function (response) {
            return _this.extractData(response);
        }).catch(function (e) {
            alert("error");
            return Observable_1.Observable.throw(new Error("error"));
        });
    };
    AppService.prototype.delete = function (_id) {
        var _this = this;
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:9000/remove/' + _id, { headers: jsonHeaders }).map(function (response) {
            return _this.extractData1(response);
        });
    };
    AppService.prototype.deleteByIndex = function (index) {
        this.taskArray.splice(index, 1);
    };
    AppService.prototype.extractData1 = function (res) {
        var body = res.json();
        return body;
    };
    // //Observable
    //   getData():Observable<any> {
    // return Observable.of<any>(this.tasks);
    // //  return Observable.throw<any>(new Error("error"));
    //
    //  }
    // //Using Promise
    //
    //  // getData() {
    //  //
    //  //    //return Promise.resolve<any>(this.tasks);
    //  //    return Promise.reject<any>(new Error("err"));
    //  //
    //  //  }
    //
    //HTTP  get CALL
    AppService.prototype.getData = function () {
        var _this = this;
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:9000/get/all', { headers: jsonHeaders }).map(function (response) {
            return _this.extractData2(response);
        });
    };
    AppService.prototype.extractData2 = function (res) {
        var body = res.json();
        return body;
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map