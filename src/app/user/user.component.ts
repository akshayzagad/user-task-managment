import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


// const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  
// selectUser = DUMMY_USERS[randomIndex];

@Input avatar

onSelectUser(){
  // const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
  // this.selectUser = DUMMY_USERS[randomIndex];
}
}
