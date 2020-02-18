import {Routes} from '@angular/router'
import { SectionSalesComponent } from './layouts/section-sales/section-sales.component'
import { SectionOrdersComponent } from './layouts/section-orders/section-orders.component'
import { SeactionHealthComponent } from './layouts/seaction-health/seaction-health.component'
import { LoginComponent } from './auth/login/login.component'

export const appRoutes: Routes = [
  //{path: '/', component: LoginComponent},
  {path: 'sales', component:SectionSalesComponent},
  {path: 'orders', component:SectionOrdersComponent},
  {path: 'health', component:SeactionHealthComponent},
  {path: '', redirectTo: '/sales', pathMatch: 'full'}
]