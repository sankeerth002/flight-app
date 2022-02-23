import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponentComponent } from './Components/admin-component/admin-component.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ManageDiscountsComponent } from './Components/manage-discounts/manage-discounts.component';
import { ManageAirlinesComponent } from './Components/manage-airlines/manage-airlines.component';
import { ManageSchedulesComponent } from './Components/manage-schedules/manage-schedules.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { HomeComponent } from './Components/home/home.component';
import { AddairlineComponent } from './Components/addairline/addairline.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    
    AdminComponentComponent,
    HeaderComponent,
    FooterComponent,
    ManageDiscountsComponent,
    ManageAirlinesComponent,
    ManageSchedulesComponent,
    ReportsComponent,
    HomeComponent,
    AddairlineComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class AdminModule { }
