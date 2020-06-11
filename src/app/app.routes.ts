import { RouterModule, Routes } from '@angular/router';

import { NotfoundpageComponent } from './shared/notfoundpage/notfoundpage.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './login/registry/registry.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registry', component: RegistryComponent },
  { path: '**', component: NotfoundpageComponent },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
