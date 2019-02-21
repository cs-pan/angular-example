import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Angular Project';

  onNewTodo($event) {
    console.log(JSON.stringify($event));
  }
}
