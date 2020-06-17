import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputsComponent } from './coms/inputs/inputs.component';
import { HistorisComponent } from './coms/historis/historis.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    HistorisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
