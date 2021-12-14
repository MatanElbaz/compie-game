import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-bulbs',
  templateUrl: './bulbs.component.html',
  styleUrls: ['./bulbs.component.css']
})
export class Bulbs implements OnInit {

  @Input() color: string;
  @Input() active: boolean = false;
  @Output() guess: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.guess.emit(this.color);
  }

}
