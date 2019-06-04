import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'DashboardTabsPage';
        this.pages = [
            { title: 'Dashboard', component: 'DashboardTabsPage' },
            { title: 'Lists', component: 'ListsTabsPage' },
            { title: 'Direkt profile link', component: 'DashboardTabsPage' },
            { title: 'No Tabs Link', component: 'NoTabsPage' },
        ];
    }
    ProfilePage.prototype.openPage = function (page) {
        this.nav.setRoot(page.component, { openTab: page.openTab });
    };
    var _a, _b;
    tslib_1.__decorate([
        ViewChild(Nav),
        tslib_1.__metadata("design:type", typeof (_a = typeof Nav !== "undefined" && Nav) === "function" ? _a : Object)
    ], ProfilePage.prototype, "nav", void 0);
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof NavController !== "undefined" && NavController) === "function" ? _b : Object])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map