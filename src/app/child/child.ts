import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <div class="child">
      <h3>Child Component</h3>
      <p>Message received from parent: {{ message() }}</p>
      <input type="text" />
      <button>Send Message!</button>
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
  message = input<string>();
}
