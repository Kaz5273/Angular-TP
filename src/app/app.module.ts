import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaisieCarteComponent } from './saisie-carte/saisie-carte.component';
import { AfficheCarteComponent } from './affiche-carte/affiche-carte.component';

@NgModule({
  declarations: [
    AppComponent,
    SaisieCarteComponent,
    AfficheCarteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
