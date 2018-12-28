import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';
import { ServiceModule } from './services/services.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    APP_ROUTES,
    ServiceModule,
    BrowserModule,
    PagesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
