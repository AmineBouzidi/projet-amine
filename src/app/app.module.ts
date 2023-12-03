import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    styleUrls: ['../node_modules/bootstrap/dist/css/bootstrap.min.css']
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
