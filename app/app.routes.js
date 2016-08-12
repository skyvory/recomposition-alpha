"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var login_component_1 = require('./login.component');
var vn_component_1 = require('./vn.component');
var auth_guard_1 = require('./common/auth.guard');
var routes = [
    // { path: '', component: HomeComponent, terminal: true },
    {
        path: '',
        redirectTo: '/vn',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'vn',
        component: vn_component_1.VnComponent,
    },
    {
        path: '**',
        component: login_component_1.LoginComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map