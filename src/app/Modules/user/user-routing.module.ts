import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './Components/booking/booking.component';
import { HistoryComponent } from './Components/history/history.component';
import { SearchComponent } from './Components/search/search.component';
import { SearchresultsComponent } from './Components/searchresults/searchresults.component';
import { TicketbookingComponent } from './Components/ticketbooking/ticketbooking.component';
import { TicketdetailsComponent } from './Components/ticketdetails/ticketdetails.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { UserhomeComponent } from './Components/userhome/userhome.component';


const routes: Routes = [
  {path:'',component: UserDashboardComponent , children:[

    {path:'userhome',component:UserhomeComponent},
    {path:'history',component:HistoryComponent},
    {path:'search',component:SearchComponent},
    {path:'searchresults',component:SearchresultsComponent},
    {path:'booking',component:BookingComponent},
    {path:'ticketbooking',component:TicketbookingComponent},
    {path:'ticketdetails',component:TicketdetailsComponent},
    {path:'',redirectTo:'/user/search',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
