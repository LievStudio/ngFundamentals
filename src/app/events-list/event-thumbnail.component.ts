import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
    .pad-left {margin-left: 10 px;}
    .well div {color: #bbb};
    `]
})

export class EventThumbnailComponent {

    @Input() event: any
    // @Output() eventClick = new EventEmitter();

    // handleClickMe(): void {
    //     this.eventClick.emit(this.event.name);
    // }

}
