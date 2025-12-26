import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);

/** Here is user object which is come from app component we declare here as a type to use as input on line 33 */
type User = { id: string; avatar: string; name: string };

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectUser = DUMMY_USERS[randomIndex];

  /** Traditional Input decorator to get value form parent */
  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;

  /** Using seprate varible use an whole object */

  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter();

  // select = output<string>();

  get imagePath() {
    return 'public/' + this.user.avatar;
  }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
    // this.selectUser = DUMMY_USERS[randomIndex];
    this.select.emit(this.user.id);
  }

  /** new Input signal to get value form parent */
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=>{
  //   return 'public/' + this.avatar()
  // })
}
