import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import {ContentModule} from './content/content.module';

import { UserService } from './content/serives/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // import module animation
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ContentModule,
    HttpClientModule
  ],
  providers: [
    UserService,
   ],
  bootstrap: [AppComponent],
})
export class AppModule { }
