import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTES } from './app.routes';

// Modules
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './login/registry/registry.component';
// import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
// import { IncreaseDecreaseComponent } from './components/increase-decrease/increase-decrease.component';
// import { DonutGraphComponent } from './components/donut-graph/donut-graph.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistryComponent,
    // DonutGraphComponent,
    // ProgressBarComponent,
    // IncreaseDecreaseComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
