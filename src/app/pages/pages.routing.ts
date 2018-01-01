import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'pages', component: PageComponent,
        children: [
            {
                path: 'home', component: HomeComponent
            },
            {
                path: 'zwheels', loadChildren: './zwheels/zwheels.module#ZwheelsModule'
            },
            {
                path: 'zcontact', loadChildren: './zcontact/zcontact.module#ZcontactModule'
            },
            {
                path: 'zaccount', loadChildren: './zaccount/zaccount.module#ZaccountModule'
            },
            {
                path: 'zsystem', loadChildren: './zsystem/zsystem.module#ZsystemModule'
            }
        ]
    }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
