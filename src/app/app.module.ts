import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FateComponent } from './comps/fate/fate.component';
import { FateRxjsComponent } from './comps/fate-rxjs/fate-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    FateComponent,
    FateRxjsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
