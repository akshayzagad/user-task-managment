import { Injectable } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

@Injectable({
    providedIn:'root'
})
export class serviceUsers {
    get users(){
        return DUMMY_USERS
    }
     getUserById(id: string) {
    return DUMMY_USERS.find((u) => u.id === id);
  }
}