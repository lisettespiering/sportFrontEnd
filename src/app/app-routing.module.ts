import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocatiesComponent } from './locaties/locaties.component';
import { AccountComponent } from './account/account.component';
import { OverOnsComponent } from './overOns/overOns.component';
import { ContactComponent } from './contact/contact.component';
import { UnknownurlComponent } from './unknownurl/unknownurl.component';
import { LocatiecreateComponent } from './locatiecreate/locatiecreate.component';
import { LocatieupdateComponent } from './locatieupdate/locatieupdate.component';
import { AccountcreateComponent } from './accountcreate/accountcreate.component';
import { AccountreviewComponent } from './accountreview/accountreview.component';
import { AccountupdateComponent } from './accountupdate/accountupdate.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {path: "home", component: HomeComponent},
  {path: "locaties", component: LocatiesComponent},

  { path: "locaties/updatelocatie/:ids", component: LocatieupdateComponent},
  { path: "locaties/nieuwelocatie", component: LocatiecreateComponent },
  { path: "account", component: AccountComponent },
  { path: "account/newaccount", component: AccountcreateComponent },
  { path: "account/youraccount", component: AccountreviewComponent },
  { path: "account/updateaccount", component: AccountupdateComponent },
  { path: "overOns", component: OverOnsComponent },
  { path: "contact", component: ContactComponent },


  { path: "**", component: UnknownurlComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
