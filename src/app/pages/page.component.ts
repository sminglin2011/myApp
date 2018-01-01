import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
    selector: 'app-pages',
    template: `
        <app-header [headerMenu]="headerMenu"></app-header>
        <router-outlet></router-outlet>
    `
})

// tslint:disable-next-line:component-class-suffix
export class PageComponent {
    headerMenu = [
        {
            name: 'ZWHEELS', url: '', routerLink: 'zwheels'
        },
        {
            name: 'ZACCOUNT', url: '', routerLink: 'zaccount'
        },
        {
            name: 'ZCONTACT', url: '', routerLink: 'zcontact'
        },
        {
            name: 'ZSYSTEM', url: '', routerLink: 'zsystem'
        }
    ];
}

