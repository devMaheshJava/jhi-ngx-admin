import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'jhi-accordion',
    templateUrl: 'accordion.component.html',
    styleUrls: ['accordion.component.scss']
})
export class AccordionComponent {
    @ViewChild('item') accordion;

    toggle() {
        this.accordion.toggle();
    }
}
