import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SeactionHealthComponent,
    LoginComponent,
    RegistrComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
