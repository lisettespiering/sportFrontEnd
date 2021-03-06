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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccountcreateComponent } from './accountcreate/accountcreate.component';
import { AccountloginComponent } from './accountlogin/accountlogin.component';
import { LocatiecreateComponent } from './locatiecreate/locatiecreate.component';
import { LocatieupdateComponent } from './locatieupdate/locatieupdate.component';
import { AccountreviewComponent } from './accountreview/accountreview.component';
import { AccountupdateComponent } from './accountupdate/accountupdate.component';


import { RatingCreateComponent } from './rating-create/rating-create.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewcreateComponent } from './reviewcreate/reviewcreate.component';
import { SearchComponent } from './search/search.component';
import { ReviewupdateComponent } from './reviewupdate/reviewupdate.component';
import { ReviewdeleteComponent } from './reviewdelete/reviewdelete.component';
import { ReviewerrorComponent } from './reviewerror/reviewerror.component';
import { TeststarsComponent } from './teststars/teststars.component';

@NgModule({
  declarations: [
    AppComponent,
    menuComponent,
    HomeComponent,
    LocatiesComponent,
    AccountComponent,
    OverOnsComponent,
    ContactComponent,
    UnknownurlComponent,
    AccountcreateComponent,
    AccountloginComponent,
    LocatiecreateComponent,
    LocatieupdateComponent,
    AccountreviewComponent,
    AccountupdateComponent,
    
    RatingCreateComponent,
    ReviewsComponent,
    ReviewcreateComponent,
    SearchComponent,
    ReviewupdateComponent,
    ReviewdeleteComponent,
    ReviewerrorComponent,
    TeststarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
