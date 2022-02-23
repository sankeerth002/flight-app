import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {

  ticketTypeList: any = [ 'Bussiness','economy','premium-business']
  genderList:any =['Male','Female']
  mealList: any =['NON VEG','VEG','BOTH']
  
  constructor() { }

  ngOnInit(): void {
  }

}
