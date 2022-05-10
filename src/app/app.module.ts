import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { fas }from '@fortawesome/free-solid-svg-icons';
import { far }from '@fortawesome/free-regular-svg-icons';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProvinceComponent } from './components/province/province.component';
import { ProvinceSlideComponent } from './components/province-slide/province-slide.component';
import { HotelSlideComponent } from './components/hotel-slide/hotel-slide.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ProvinceComponent,
    ProvinceSlideComponent,
    HotelSlideComponent,
    HotelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas,far);
  }
}
