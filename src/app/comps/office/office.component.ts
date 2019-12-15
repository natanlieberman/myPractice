import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  call_maneger = 0
  call_secretary = 0
  call_worker = 0
  

  constructor() { }

  ngOnInit() {
  }

}
