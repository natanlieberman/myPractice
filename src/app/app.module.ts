import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficeComponent } from './comps/office/office.component';
import { ManegerComponent } from './comps/maneger/maneger.component';
import { SecretaryComponent } from './comps/secretary/secretary.component';
import { WorkerComponent } from './comps/worker/worker.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficeComponent,
    ManegerComponent,
    SecretaryComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
