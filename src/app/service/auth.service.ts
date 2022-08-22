import { Injectable } from "@angular/core";

import { UInterface } from "../interface";

@Injectable()
export class AuthService {
    currentUser: UInterface;
    login(userName: string, password: string) {
        this.currentUser = {
            userName : userName,
            lastName : "Riddle",
            firstName : "Tom",
            id:1
        }
    }

    isLoggedIn() {
        return !!this.currentUser;
    }
}
