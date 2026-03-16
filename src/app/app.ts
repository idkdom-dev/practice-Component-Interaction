import { Component, signal } from '@angular/core';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Child, FormsModule],
  template: `
    <div class="container parent">
      <h2>Parent Component (App Component)</h2>
      <p>Message to Child: <input type="text" [(ngModel)]="parentMessage" /></p>
      <p>Message from Child: {{ childMessage() }}</p>
      <div>
        <app-child [message]="parentMessage()" (clicked)="receivedMessage($event)"></app-child>
      </div>
    </div>
  `,
  styles: `
    .parent {
      background-color: pink;
      color: black;
    }
  `,
})
export class App {
  parentMessage = signal<string>('');
  childMessage = signal<string>('');

  receivedMessage(msg: string) {
    this.childMessage.set(msg);
  }
}
