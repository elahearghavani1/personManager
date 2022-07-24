import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/persons/person-detail/person-detail.component';
import { PersonsComponent } from './components/persons/persons.component';

const routes: Routes = [
{path: '',component: PersonsComponent},
{ path: 'detail/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }