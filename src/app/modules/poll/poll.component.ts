import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ngx-poll',
  template: `
<ng-container *ngIf="dataLoaded;else notLoaded">
  <div class="container">
    <div class="row"
      *ngFor="let question of questions;let i = index">
      <div class="col-md-8 col-12 text-center">{{ question.text }}</div>
      <div class="col-md-4 col-12">
        <div class="btn-group">
          <label class="btn btn-primary"
            [(ngModel)]="question.value"
            btnRadio
            [btnRadio]="primaryButtonValue"
            tabindex="0"
            name="{{ 'yes_btn_' + i }}"
            role="button">{{ primaryButtonTitle }}</label>
          <label class="btn btn-primary"
            [(ngModel)]="question.value"
            btnRadio
            [btnRadio]="secondaryButtonValue"
            tabindex="0"
            name="{{ 'no_btn_' + i }}"
            role="button">{{ secondaryButtonTitle }}</label>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-8"></div>
      <div class="col-md-4">
        <button class="btn btn-success"
          (click)="sendData()">{{ submitButtonTitle }}</button>
      </div>
    </div>
  </div>
</ng-container>
<ng-template #notLoaded>
  <div class="container">
    <div class="row">
      Loading...
    </div>
  </div>
</ng-template>`
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
