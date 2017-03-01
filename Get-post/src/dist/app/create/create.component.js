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
var task_1 = require('../task');
var app_service_1 = require("../app.service");
//import error = webdriver.error;
//import error = webdriver.error;
var CreateComponent = (function () {
    function CreateComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.task = new task_1.Task();
        this.task1 = [{
                date: '12/12/12',
                title: 'Anmol',
                description: 'hi all',
                priority: 'high',
                _id: '123'
            }];
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.index = data.i;
            if (_this.index) {
                // this.task = this.service.tasks[this.index];
                _this.pageRefresh();
            }
        });
    };
    //Using Observable GET HTTP
    //         this.service.getData().subscribe((data1 :any)=>{
    //           alert(JSON.stringify(data1))
    //         },
    //           (e:any)=> {
    //           alert(e);
    //
    //         },
    //           ()=>
    //           {
    //           alert("completed")
    //           }
    //         );
    // this.service.postData().subscribe((data1 :any)=>{
    //     alert(JSON.stringify(data1))
    //   },
    //   (e:any)=> {
    //     alert(e);
    //
    //   },
    //   ()=>
    //   {
    //     alert("completed")
    //   }
    // );
    // Using Promise
    // this.service.getData().then((data1 :any)=>{
    //   alert(JSON.stringify(data1))},error=>{
    //     alert(error)
    //   }
    //   }
    //
    // });
    //
    CreateComponent.prototype.submit = function () {
        if (this.index) {
            this.service.update(this.task).subscribe(function (data1) {
                alert("Updated");
            }, function (e) {
                alert(e);
            });
        }
        else {
            this.service.add(this.task).subscribe(function (data1) {
                // alert(JSON.stringify(data1))
            }, function (e) {
                alert(e);
            }, function () {
                // alert("completed")
            });
        }
        this.router.navigate(['show']);
    };
    CreateComponent.prototype.goHome = function () {
        this.router.navigate(['home']);
    };
    CreateComponent.prototype.pageRefresh = function () {
        var _this = this;
        this.service.getData().subscribe(function (data1) {
            _this.task1 = data1;
            // this.task = this.task1[this.index]
            _this.task = _this.task1.filter(function (x) { return x._id == _this.index; })[0];
            // alert(JSON.stringify(data1))
        }, function (e) {
            alert(e);
        });
    };
    CreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create',
            templateUrl: './create.component.html',
            styleUrls: ['./create.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, app_service_1.AppService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map