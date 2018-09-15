import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    PollComponent
  ],
  exports: [
    PollComponent
  ]
})
export class PollModule { }
