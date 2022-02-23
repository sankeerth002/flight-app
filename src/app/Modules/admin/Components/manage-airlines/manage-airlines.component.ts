import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/Entity/Airline';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.css']
})
export class ManageAirlinesComponent implements OnInit {

  airlines: Airline[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAirlines();
  }

  private getAirlines(){
    this.adminService.getAirlinesList().subscribe(data => {
      this.airlines = data;
    })
  }

}
