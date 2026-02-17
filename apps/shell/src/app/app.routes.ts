import { HomeComponent } from './home.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'tasksMf',
    loadChildren: () => import('tasksMf/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: HomeComponent,
  },
];
