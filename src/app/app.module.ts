import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipsComponent } from './ships/ships.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ShipsComponent,
    InfoComponent,
    LoginComponent,
    NavComponent,
    CreateaccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/project2'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
