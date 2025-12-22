import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
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

/** Traditional Input decorator to get value form parent */
@Input({required:true}) id!: string;
@Input({required:true}) avatar!: string;
@Input({required:true}) name!: string;
@Output() select = new EventEmitter();

get imagePath(){
  return 'public/' + this.avatar
}

onSelectUser(){
  // const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
  // this.selectUser = DUMMY_USERS[randomIndex];
  this.select.emit(this.id)
}

/** new Input signal to get value form parent */
// avatar = input.required<string>();
// name = input.required<string>();

// imagePath = computed(()=>{
//   return 'public/' + this.avatar()
// })
}
