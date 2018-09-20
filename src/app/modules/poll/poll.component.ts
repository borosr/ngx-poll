import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ngx-poll',
  template: `
<ng-container *ngIf="dataLoaded;else notLoaded">
  <div class="container">
    <ng-container *ngFor="let question of questions;let i = index">
      <div class="row">
        <div class="col-12">{{ question.text }}</div>
        <div class="col-12">
          <div class="btn-group">
            <label class="btn btn-primary"
              [(ngModel)]="question.value"
              btnRadio
              [disabled]="disabled"
              [btnRadio]="primaryButtonValue"
              tabindex="0"
              name="{{ 'yes_btn_' + i }}"
              role="button">{{ primaryButtonTitle }}</label>
            <label class="btn btn-primary"
              [(ngModel)]="question.value"
              btnRadio
              [disabled]="disabled"
              [btnRadio]="secondaryButtonValue"
              tabindex="0"
              name="{{ 'no_btn_' + i }}"
              role="button">{{ secondaryButtonTitle }}</label>
            <label class="btn btn-primary"
              *ngIf="tertiaryButtonShow"
              [(ngModel)]="question.value"
              btnRadio
              [disabled]="disabled"
              [btnRadio]="tertiaryButtonValue"
              tabindex="0"
              name="{{ 'stay_btn_' + i }}"
              role="button">{{ tertiaryButtonTitle }}</label>
          </div>
        </div>
        </div>
        <hr />
      </ng-container>
      <div class="row mt-4">
        <div class="col-12">
          <button class="btn btn-success"
          *ngIf="submitButtonShow"
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

  @Input() tertiaryButtonShow: boolean = false;
  @Input() tertiaryButtonTitle: string = 'Stay';
  @Input() tertiaryButtonValue: any = null;

  @Input() submitButtonTitle: string = 'Send';
  @Input() submitButtonShow: boolean = false;

  @Input() disabled: boolean = false;

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
