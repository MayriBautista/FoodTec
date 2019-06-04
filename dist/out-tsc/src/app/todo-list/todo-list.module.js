import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TodoListPage } from './todo-list.page';
var routes = [
    {
        path: '',
        component: TodoListPage
    }
];
var TodoListPageModule = /** @class */ (function () {
    function TodoListPageModule() {
    }
    TodoListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TodoListPage]
        })
    ], TodoListPageModule);
    return TodoListPageModule;
}());
export { TodoListPageModule };
//# sourceMappingURL=todo-list.module.js.map