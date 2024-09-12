import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss',
})
export class SuccessComponent {
  // @Output() newStateEvent: EventEmitter<string> = new EventEmitter<string>();
  // changeNewState(value: string) {
  //   this.newStateEvent.emit(value);
  // }
}
