import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShortlistComponent } from './shortlist/shortlist.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path: 'shortlist', component: ShortlistComponent },
  { path: '', component: LoginComponent },
  { path: 'listing', component: ListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
