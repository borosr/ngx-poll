import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  @Input() primaryButtonTitle: string = 'Yes';
  @Input() primaryButtonValue: any = true;

  @Input() secondaryButtonTitle: string = 'No';
  @Input() secondaryButtonValue: any = false;

  @Input() submitButtonTitle: string = 'Send';

  @Input() dataLoaded = true;

  @Input('questions') questions: [{ text: string, value: any }];

  @Output() send = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendData() {
    this.send.emit();
  }

}
