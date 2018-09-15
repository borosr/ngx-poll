import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PollModule } from './modules/poll/poll.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
