import { Component, OnInit, ViewChild } from '@angular/core';
// import { schedule } from 'src/app/Entity/schedule';
// import { AdminService } from 'src/app/Services/admin.service';
import { schedule } from 'src/app/Entity/schedule';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpDataService } from 'src/app/Services/http-data.service';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-manage-schedules',
  templateUrl: './manage-schedules.component.html',
  styleUrls: ['./manage-schedules.component.css']
})
export class ManageSchedulesComponent implements OnInit {
  

  @ViewChild('scheduleForm',{static:false})
  scheduleForm!: NgForm;
  scheduleData!: schedule;
  dataSource = new MatTableDataSource();

  displayedColumns: string[]=[ 'flightNumber','airline','fromPlace','toPlace',
 'startDateTime','endDateTime','instrumentUsed','businessClassSeats',
  'nonBusinessClassSeats','ticketCost','rows','mealsType'];

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  isEditMode = false;

  constructor(private httpDataService:HttpDataService){
     this.scheduleData = {} as schedule;
  }
  ngOnInit(): void {
      
    //Initializing Datatable pagination
    this.dataSource.paginator=this.paginator;

    //To fetch all data
    this.getAllSchedules()
  }

  onSubmit(){

  }
   
  getAllSchedules(){
    this.httpDataService.getList().subscribe((response:any) => {
      this.dataSource.data=response;
    });
  }

  editItem(element:any){
    this.scheduleData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit(){
    this.isEditMode= false;
    this.scheduleForm.resetForm();
  }

  deleteItem(flightNumber:number){
    this.httpDataService.deleteItem(flightNumber).subscribe((response:any) => {
// update datatable data on local itself without fetching new data from server
    this.dataSource.data = this.dataSource.data.filter((o:any) => {
      return o.flightNumber !== flightNumber ? o : false;
    })
    console.log(this.dataSource.data);
    });
  }
}
