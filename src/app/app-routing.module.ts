import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryGetComponent} from './category-get/category-get.component';
import {CategoryAddComponent} from './category-add/category-add.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {EventsComponent} from './events/events.component';
import {SpecialEventsComponent} from './special-events/special-events.component';
import {AuthGuard} from './auth.guard';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {OperationAddComponent} from './operation-add/operation-add.component';
import {OperationGetComponent} from './operation-get/operation-get.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},


  {path: 'category', component: CategoryGetComponent},
  {path: 'category_add', component: CategoryAddComponent},
  {path: 'category/:id', component: CategoryEditComponent},


  {path: 'operations', component: OperationGetComponent},
  {path: 'operation_add', component: OperationAddComponent},
  {path: 'operation/:id', component: OperationGetComponent},


  {path: 'transaction', component: CategoryGetComponent},



  {
    path: 'home',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    canActivate: [AuthGuard],
    component: SpecialEventsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
