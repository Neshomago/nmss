import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ClientsComponent } from './clients/clients.component';
import { SalespointComponent } from './salespoint/salespoint.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule} from '@angular/material/slider';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog'; 

import {MatInputModule} from '@angular/material/input';
import { CreateComponent } from './create/create.component';
import { UsereditComponent } from './useredit/useredit.component'; 

import {AuthService} from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AddTicketComponent } from './tickets/add-ticket/add-ticket.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { AddAgencyComponent } from './salespoint/add-agency/add-agency.component';
import {btnfloatComponent} from './btn-float.component';
import {SharedService} from './services/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    WarehouseComponent,
    ClientsComponent,
    SalespointComponent,
    TicketsComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    CreateComponent,
    UsereditComponent,
    AddTicketComponent,
    AddContactComponent,
    AddAgencyComponent,
    btnfloatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'',component: HomeComponent},
      { path:'login',component: LoginComponent},
      {path:'contacts',component:ContactsComponent},
      {path:'clients',component:ClientsComponent},
      {path:'salespoint',component:SalespointComponent},
      {path:'warehouse',component:WarehouseComponent},
      {path:'tickets',component:TicketsComponent},
      {path:'create',component:CreateComponent},
      {path:'edituser',component:UsereditComponent}
    ])
  ],
  providers: [AuthService, SharedService],
  bootstrap: [AppComponent],
})
export class AppModule { }
