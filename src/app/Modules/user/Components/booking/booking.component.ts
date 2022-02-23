import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Tickets } from 'src/app/Entity/Tickets';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  tickets: Tickets[]=[]
  userService: any;

  constructor() { }

  ngOnInit(): void {
    this.userService.getAllBookings().subscribe((data: Tickets[])=>{
      this.tickets = data;
      console.log(this.tickets);
    }) 

  }

}
