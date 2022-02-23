import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dateTo = dayjs;
  dateFrom;

  DateSelected: any;
  datepickerConfig: any;

  constructor() { 
    this.dateFrom = dayjs('10.30.2021')
  }

  datePickerConfig = {
    format: 'YYYY-MM-DD HH:mm',
    monthformat: 'MMM,YYYY',
    startDate: '01.01.2021',
  }

  ngOnInit(): void {
  }

}
