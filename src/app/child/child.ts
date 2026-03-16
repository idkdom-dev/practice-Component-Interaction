import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  template: `
    <div class="child">
      <h3>Child Component</h3>
      <p>Message received from parent: {{ message() }}</p>
      <input type="text" [(ngModel)]="childMessage" />
      <!-- Can add (input)="notify()" to make it work dynamically -->
      <button (click)="notify()">Send Message!</button>
    </div>
  `,
  styles: `
    .child {
      background-color: black;
      color: white;
      margin: 2rem;
      padding: 2rem;
    }
  `,
})
export class Child {
  // input property to receive data from parent
  message = input<string>();
  childMessage = signal<string>('');
  // output property to send data back to parent
  clicked = output<string>();

  notify() {
    this.clicked.emit(this.childMessage());
  }
}
