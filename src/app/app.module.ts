import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


import { MainDashComponent } from './main-dash/main-dash.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';

import { UserService } from './services/users/user.service';
import { SocketDocumentService } from './services/socket/socket-document.service';
import { LoginComponent } from './login/login.component';

// const config: SocketIoConfig = {url: 'http://localhost:4000/api', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainDashComponent,
    UsersComponent,
    UserListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule,
    
  ],
  providers: [UserService, SocketDocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
