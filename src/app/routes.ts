import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './events-list/event-details/event-details.component';
import { Routes } from '@angular/router';
import { CreateEventComponent } from './events-list/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events-list/event-details/event-route-activator.service';
import { EventListResolverService } from './events-list/event-list-resolver.service';
import { CreateSessionComponent } from './events-list';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren:'./user/user.module#UserModule'}
];


