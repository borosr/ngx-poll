import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngx-poll';

  questions = [{
    text: 'Is it okay?',
    id: 2,
    type: 'maybe'
  },
  {
    text: 'Do you want a ball?',
    id: 4,
    type: 'yes'
  },
  {
    text: 'Yes or no?',
    id: 6,
    type: 'no'
  }]

  constructor() {
    setTheme('bs4');
  }

}
