import { Component } from '@angular/core';
import { NbCalendarDayCellComponent } from '@nebular/theme';

@Component({
    selector: 'jhi-day-cell',
    templateUrl: 'day-cell.component.html',
    styleUrls: ['day-cell.component.scss'],
    host: { '(click)': 'onClick()', class: 'day-cell' }
})
export class DayCellComponent extends NbCalendarDayCellComponent<Date> {}
