import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss',
})
export class SuccessComponent {
  // @Output() newStateEvent: EventEmitter<string> = new EventEmitter<string>();
  // changeNewState(value: string) {
  //   this.newStateEvent.emit(value);
  // }
}
