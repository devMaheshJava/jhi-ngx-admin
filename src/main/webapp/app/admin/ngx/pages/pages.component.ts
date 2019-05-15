import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
    selector: 'jhi-ngx-pages',
    styleUrls: ['pages.component.scss'],
    template: `
        <jhi-ngx-sample-layout>
            <nb-menu [items]="menu"></nb-menu>
            <router-outlet></router-outlet>
        </jhi-ngx-sample-layout>
    `
})
export class PagesComponent {
    menu = MENU_ITEMS;
}
