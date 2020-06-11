import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [PagesComponent, DashboardComponent, ProgressComponent, Graphs1Component],
  exports: [DashboardComponent, ProgressComponent, Graphs1Component],
  imports: [SharedModule, PAGES_ROUTES]
})
export class PagesModule {}
