import { Component } from '@angular/core';
import {UpperCase} from './friends-list.pipe';
import {LowerCase} from './friends-list.pipe2';

@Component({
    selector : 'pm-products',
    templateUrl : 'app/friends/friends-list.component.html'
})
export class FriendListComponent{
    pageTitle : string= 'Friends List';

   friends:any = [
         {"name": "Avnesh", "hobby": "Coding"},
         {"name": "Kaushik", "hobby": "Coding"},
         {"name": "Archana", "hobby": "Cooking"},
         {"name": "Piyush", "hobby": "Singing"},
         {"name": "Archit", "hobby": "Sports"},
         {"name": "Hema", "hobby": "Gossiping"}
    ];

  


}


