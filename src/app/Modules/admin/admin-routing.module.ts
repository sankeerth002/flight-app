import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddairlineComponent } from './Components/addairline/addairline.component';
import { AdminComponentComponent } from './Components/admin-component/admin-component.component';
import { HomeComponent } from './Components/home/home.component';
import { ManageAirlinesComponent } from './Components/manage-airlines/manage-airlines.component';
import { ManageDiscountsComponent } from './Components/manage-discounts/manage-discounts.component';
import { ManageSchedulesComponent } from './Components/manage-schedules/manage-schedules.component';
import { ReportsComponent } from './Components/reports/reports.component';

const routes: Routes = [
  {path: '', component: AdminComponentComponent , 
  children: [
    {path:'manage-airlines',component: ManageAirlinesComponent},
    {path: 'addairlines',component: AddairlineComponent},
    {path:'manage-schedules',component: ManageSchedulesComponent},
    {path:'manage-discounts',component: ManageDiscountsComponent},
    {path:'home',component: HomeComponent},
    {path:'reports',component: ReportsComponent},
    {path: '' , redirectTo: '/admin/home', pathMatch: 'full'},
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
