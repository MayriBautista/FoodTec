import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpmayriService } from '../httpmayri.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(http) {
        this.http = http;
    }
    LoginPage.prototype.inicio = function () {
        console.log(this.correo + this.contra);
        this.http.login(this.correo, this.contra).then(function (inv) {
            console.log(inv);
            var id = inv['id'];
            if (id != 0) {
            }
            else {
                //toastcontroller
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpmayriService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map