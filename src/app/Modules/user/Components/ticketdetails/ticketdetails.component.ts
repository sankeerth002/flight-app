import { Component, OnInit } from '@angular/core';
import { Tickets } from 'src/app/Entity/Tickets';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-ticketdetails',
  templateUrl: './ticketdetails.component.html',
  styleUrls: ['./ticketdetails.component.css']
})
export class TicketdetailsComponent implements OnInit {
  tickets:Tickets[]=[];
  userService: any;

  constructor() { }

  ngOnInit(): void {
    this.userService.getTicket().subscribe((data:Tickets[])=>{
      this.tickets=data;
      console.log(this.tickets);
    })
  }

}
