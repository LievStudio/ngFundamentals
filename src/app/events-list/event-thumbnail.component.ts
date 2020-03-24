import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
    .green {color: #003300 !important;},
    .bold {font-weight: bold},
    .thumbnail {min-height: 210 px},
    .pad-left {margin-left: 10 px},
    .well div {color: #bbb};
    `]
})

export class EventThumbnailComponent {

    @Input() event: IEvent
    // @Output() eventClick = new EventEmitter();

    // handleClickMe(): void {
    //     this.eventClick.emit(this.event.name);
    // }

    getStartTimeClass(): any {
      const isEarlyStart = this.event && this.event.time === '8:00 am';
      return {green: isEarlyStart, bold: isEarlyStart};
    }

}
