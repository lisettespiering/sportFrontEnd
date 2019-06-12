import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { menuComponent } from './menu/menu.component';

import { HomeComponent } from './home/home.component';
import { LocatiesComponent } from './locaties/locaties.component';
import { AccountComponent } from './account/account.component';
import { OverOnsComponent } from './overOns/overOns.component';
import { ContactComponent } from './contact/contact.component';
import { UnknownurlComponent } from './unknownurl/unknownurl.component';

@NgModule({
  declarations: [
    AppComponent,
    menuComponent,
    HomeComponent,
    LocatiesComponent,
    AccountComponent,
    OverOnsComponent,
    ContactComponent,
    UnknownurlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
