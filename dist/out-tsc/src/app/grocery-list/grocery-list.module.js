import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GroceryListPage } from './grocery-list.page';
var routes = [
    {
        path: '',
        component: GroceryListPage
    }
];
var GroceryListPageModule = /** @class */ (function () {
    function GroceryListPageModule() {
    }
    GroceryListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GroceryListPage]
        })
    ], GroceryListPageModule);
    return GroceryListPageModule;
}());
export { GroceryListPageModule };
//# sourceMappingURL=grocery-list.module.js.map