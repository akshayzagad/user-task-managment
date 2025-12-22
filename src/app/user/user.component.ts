import { Component, computed, input, Input } from '@angular/core';
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

// @Input({required:true}) avatar!: string;
// @Input({required:true}) name!: string;

avatar = input.required<string>();
name = input.required<string>();

imagePath = computed(()=>{
  return 'public/' + this.avatar()
})

// get imagePath(){
//   return 'public/' + this.avatar
// }

onSelectUser(){
  // const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
  // this.selectUser = DUMMY_USERS[randomIndex];
}
}
