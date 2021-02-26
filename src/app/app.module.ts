import { RouterModule } from '@angular/router';
import { LetStartComponent } from './components/let-start/let-start.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { ToastrModule} from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LetStartComponent,
    UserDetailComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
