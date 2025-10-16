import { Component, signal } from '@angular/core';
import { Messages } from "./messages/messages";
import { RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Messages, RouterOutlet, RouterModule], //Heroes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tour of Heroes');
}
