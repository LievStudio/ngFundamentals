import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './events-list/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EventService } from './events-list/shared/event.service';
import { EventDetailsComponent } from './events-list/event-details/event-details.component';
import { CreateEventComponent } from './events-list/create-event.component';
import { Error404Component } from './errors/404.component';

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState() {

}
