import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var HttpmayriService = /** @class */ (function () {
    function HttpmayriService(http) {
        this.http = http;
    }
    HttpmayriService.prototype.login = function (correo, contra) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/login/' + contra + '/' + correo;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpmayriService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], HttpmayriService);
    return HttpmayriService;
}());
export { HttpmayriService };
//# sourceMappingURL=httpmayri.service.js.map