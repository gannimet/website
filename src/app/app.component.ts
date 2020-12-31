import { Component } from '@angular/core';

@Component({
  selector: 'rwo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  today = new Date();
}
