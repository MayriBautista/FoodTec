import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListTabsPage } from './list-tabs.page';
var routes = [
    {
        path: '',
        component: ListTabsPage
    }
];
var ListTabsPageModule = /** @class */ (function () {
    function ListTabsPageModule() {
    }
    ListTabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListTabsPage]
        })
    ], ListTabsPageModule);
    return ListTabsPageModule;
}());
export { ListTabsPageModule };
//# sourceMappingURL=list-tabs.module.js.map