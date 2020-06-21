import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { IncreaseDecreaseComponent } from '../components/increase-decrease/increase-decrease.component';
import { DonutGraphComponent } from '../components/donut-graph/donut-graph.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphs1Component,
    IncreaseDecreaseComponent,
    DonutGraphComponent,
    AccountSettingsComponent,
    PromisesComponent
  ],
  exports: [DashboardComponent, ProgressComponent, Graphs1Component],
  imports: [SharedModule, PAGES_ROUTES, FormsModule, ChartsModule],
})
export class PagesModule {}
