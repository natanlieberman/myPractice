import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  @Input() input:number
  @Output() output:EventEmitter<null> = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

}
