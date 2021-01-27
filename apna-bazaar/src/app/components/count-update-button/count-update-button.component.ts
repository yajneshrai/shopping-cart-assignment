import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-update-button',
  templateUrl: './count-update-button.component.html',
  styleUrls: ['./count-update-button.component.scss']
})
export class CountUpdateButtonComponent implements OnInit {

  @Input() count: number = 0;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increaseCount() {
    this.add.emit();
  }

  decreaseCount() {
    this.remove.emit();
  }

}
