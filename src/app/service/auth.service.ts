import { Injectable } from "@angular/core";
import { DataService } from "app/core/data.service";
import { Reader } from "app/models/reader";

import { ProfileInterface, UInterface } from "../interface";

@Injectable()
export class AuthService {
    currentUser: UInterface;
    reader: Reader;

    constructor(private dataService: DataService) { }

    login(userName: string, password: string) {
        this.currentUser = {
            userName: userName,
            lastName: "Riddle",
            firstName: "Tom",
            id: 1
        }

        this.reader = this.dataService.getAllReaders().filter(reader => reader.name === this.currentUser.userName)[0];

    }

    isLoggedIn() {
        return !!this.currentUser;
    }

    updateCurrentUser(profile: ProfileInterface) {
        this.currentUser.lastName = profile.lastName;
        this.currentUser.firstName = profile.firstName;
    }
}
