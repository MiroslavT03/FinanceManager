import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EnrollmentService } from './enrollment.service';
import { OperationsService } from './operations.service';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryGetComponent } from './category-get/category-get.component';
import {AuthGuard} from './auth.guard';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {EventsComponent} from './events/events.component';
import {SpecialEventsComponent} from './special-events/special-events.component';
import {AuthService} from './auth.service';
import {EventService} from './event.service';
import {TokenInterceptorService} from './token-interceptor.service';
import { OperationAddComponent } from './operation-add/operation-add.component';
import { OperationEditComponent } from './operation-edit/operation-edit.component';
import { OperationGetComponent } from './operation-get/operation-get.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryGetComponent,
    OperationAddComponent,
    OperationEditComponent,
    OperationGetComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [EnrollmentService, AuthService, AuthGuard, EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
