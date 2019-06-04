import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'dashboard-tabs', loadChildren: './dashboard-tabs/dashboard-tabs.module#DashboardTabsPageModule' },
    { path: 'list-tabs', loadChildren: './list-tabs/list-tabs.module#ListTabsPageModule' },
    { path: 'no-tabs', loadChildren: './no-tabs/no-tabs.module#NoTabsPageModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
    { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
    { path: 'todo-list', loadChildren: './todo-list/todo-list.module#TodoListPageModule' },
    { path: 'grocery-list', loadChildren: './grocery-list/grocery-list.module#GroceryListPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map