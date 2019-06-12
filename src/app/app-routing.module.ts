import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocatiesComponent } from './locaties/locaties.component';
import { AccountComponent } from './account/account.component';
import { OverOnsComponent } from './overOns/overOns.component';
import { ContactComponent } from './contact/contact.component';
import { UnknownurlComponent } from './unknownurl/unknownurl.component';
import { LocatiecreateComponent } from './locatiecreate/locatiecreate.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {path: "home", component: HomeComponent},
  {path: "locaties", component: LocatiesComponent},

  { path: "locaties/nieuwelocatie", component: LocatiecreateComponent },
  { path: "account", component: AccountComponent },
  { path: "overOns", component: OverOnsComponent },
  { path: "contact", component: ContactComponent },

  { path: "**", component: UnknownurlComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
