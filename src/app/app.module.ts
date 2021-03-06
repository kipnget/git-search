import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchFormComponent } from './search-form/search-form.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    DateCountPipe,
    NotFoundComponent,
    SearchFormComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
