import { LetStartComponent } from './components/let-start/let-start.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  { path: '', component: LetStartComponent },
  // { path: 'start', component: LetStartComponent },
  // { path: 'form', component: UserDetailComponent },
  { path: 'form', component: UserDetailComponent },
  { path: 'start', component: LetStartComponent },

  

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

const childroutes: Routes = [

  { path: '', component: LetStartComponent },
 
  { path: 'form', component: UserDetailComponent },
  { path: 'start', component: LetStartComponent },

  

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
