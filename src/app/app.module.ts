import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AddBookComponent } from './add-book/add-book.component';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { BookTrackerErrorHandlerService } from './core/book-tracker-error-handler.service';

import { AddHeaderInterceptor } from './core/add-header.interceptors';
import { LogResponseInterceptor } from './core/log-response.interceptors';
import { CacheInterceptor } from './core/cache.interceptor';
import { LoginComponent } from './component/login-component/login.component';
import { AuthService } from './service/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile-component/profile.component';
import { UpvoteComponent } from './component/upvote-component/upvote.component';
import { VoterService } from './service/voter.service';

const route: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    EditReaderComponent,
    EditBookComponent,
    AddReaderComponent,
    LoginComponent,
    ProfileComponent,
    UpvoteComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: BookTrackerErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    AuthService,
    VoterService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
