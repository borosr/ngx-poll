import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-poll';

  questions = [{
    text: 'Is it okay?',
    value: null
  },
  {
    text: 'Do you want a ball?',
    value: null
  },
  {
    text: 'Yes or no?',
    value: null
  }]

  constructor() {
    setTheme('bs4');
  }

}
