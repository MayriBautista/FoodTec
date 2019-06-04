import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NoTabsPage } from './no-tabs.page';
var routes = [
    {
        path: '',
        component: NoTabsPage
    }
];
var NoTabsPageModule = /** @class */ (function () {
    function NoTabsPageModule() {
    }
    NoTabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NoTabsPage]
        })
    ], NoTabsPageModule);
    return NoTabsPageModule;
}());
export { NoTabsPageModule };
//# sourceMappingURL=no-tabs.module.js.map