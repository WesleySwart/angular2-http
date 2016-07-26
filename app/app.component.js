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
//import {HTTP_PROVIDERS} from '@angular/http';
var http_service_1 = require('./http.service');
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.title = 'Angular 2 Http';
        this.description = 'Make service calls to json test and display response.';
    }
    AppComponent.prototype.getIPAddress = function () {
        var _this = this;
        this.httpService.getIPAddress()
            .subscribe(function (data) { return _this.getIP = JSON.stringify(data); }, function (error) { return console.log("Error HTTP GET"); }, function () { return console.log("GET Done"); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <p>{{description}}</p>\n    <!-- JSON Test Services -->\n    <div class='jsontest'>\n    <button (click)=\"getIPAddress()\">Get IP</button>\n    <p>{{getIP}}</p>\n    </div>\n  ",
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map