import { Routes } from '@angular/router';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const ROUTES: Routes = [
  { path: 'profile-user', component: ProfileUserComponent },
  { path: 'sign-up', component:SignUpComponent},
];

export { ROUTES };