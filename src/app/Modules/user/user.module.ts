import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { BookingComponent } from './Components/booking/booking.component';
import { HistoryComponent } from './Components/history/history.component';
import { SearchComponent } from './Components/search/search.component';
import { SearchresultsComponent } from './Components/searchresults/searchresults.component';
import { TicketbookingComponent } from './Components/ticketbooking/ticketbooking.component';
import { TicketdetailsComponent } from './Components/ticketdetails/ticketdetails.component';
import { UserhomeComponent } from './Components/userhome/userhome.component';
import { UserheaderComponent } from './Components/userheader/userheader.component';
import { UserfooterComponent } from './Components/userfooter/userfooter.component';


@NgModule({
  declarations: [
    
    UserDashboardComponent,
    BookingComponent,
    HistoryComponent,
    SearchComponent,
    SearchresultsComponent,
    TicketbookingComponent,
    TicketdetailsComponent,
    UserhomeComponent,
    UserheaderComponent,
    UserfooterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ]
})
export class UserModule { }
