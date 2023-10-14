import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SuperheroModule } from './superhero/superhero.module'
import { SuperheroListComponent } from './superhero/superhero-list/superhero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuperheroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
