import { Routes } from '@angular/router';
import { SpaceComponent } from './space/space.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: '',
    component: SpaceComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];
