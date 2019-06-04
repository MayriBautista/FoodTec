import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DashboardTabsPage } from './dashboard-tabs.page';
var routes = [
    {
        path: '',
        component: DashboardTabsPage
    }
];
var DashboardTabsPageModule = /** @class */ (function () {
    function DashboardTabsPageModule() {
    }
    DashboardTabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DashboardTabsPage]
        })
    ], DashboardTabsPageModule);
    return DashboardTabsPageModule;
}());
export { DashboardTabsPageModule };
//# sourceMappingURL=dashboard-tabs.module.js.map