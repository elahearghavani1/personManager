import { ModalService } from './services/modal.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { PersonService } from './services/person.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PersonsComponent } from './components/persons/persons.component';
import { DetailComponent } from './components/persons/person-detail/person-detail.component';
import { ConfirmModalComponent } from './components/modal/confirm-modal/confirm-modal.component';
import { FormModalComponent } from './components/modal/person-modal/person-modal.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
 {path: '',redirectTo: 'PersonsComponent',pathMatch: 'full'},
{ path: 'detail/:id', component: DetailComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    DetailComponent,
    ConfirmModalComponent,
    FormModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
    positionClass: 'toast-top-right',
    }),

  ],
  providers: [ModalService,PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
