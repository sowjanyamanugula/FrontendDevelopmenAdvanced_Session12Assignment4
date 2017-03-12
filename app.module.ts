import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule }  from '@angular/forms';
import { AppComponent }  from './app.component';
import { FriendListComponent } from './friends/friends-list.component';
import {UpperCase} from './friends/friends-list.pipe';
import {LowerCase} from './friends/friends-list.pipe2';

@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent,
                 FriendListComponent,
                 UpperCase,
                 LowerCase],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
