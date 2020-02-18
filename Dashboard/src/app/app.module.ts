import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { appRoutes } from './router';
import { SectionSalesComponent } from './layouts/section-sales/section-sales.component';
import { SectionOrdersComponent } from './layouts/section-orders/section-orders.component';
import { SeactionHealthComponent } from './layouts/seaction-health/seaction-health.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrComponent } from './auth/registr/registr.component';
import { RouterModule } from '@angular/router';
import { BarChartComponent } from './layouts/bar-chart/bar-chart.component';
import { LineChartComponent } from './layouts/line-chart/line-chart.component';
import { PieChartComponent } from './layouts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SeactionHealthComponent,
    LoginComponent,
    RegistrComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
