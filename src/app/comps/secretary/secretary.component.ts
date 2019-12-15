import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent implements OnInit {

  @Input() input:number
  @Output() output:EventEmitter<null> = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

}
