import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
// import { ProfileComponent } from './profile.component';

const routes: RouterConfig = [
    // { path: '', component: HomeComponent, terminal: true },
    {
    	path: '',
    	redirectTo: '/home',
    	pathMatch: 'full'
    },
    {
    	path: 'home',
    	component: HomeComponent
    },
    {
    	path: 'login',
    	component: LoginComponent
    },
];

export const appRouterProviders = [
	provideRouter(routes)
];