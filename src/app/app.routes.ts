import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/test',
        pathMatch: 'full'
    },
    { path: 'about', component: AboutComponent },
    { path: 'test', component: TestComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
