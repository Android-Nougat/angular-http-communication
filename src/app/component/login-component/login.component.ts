import { Component, OnInit } from "@angular/core";
import { LoginInterface } from "app/interface";

import {Router} from '@angular/router';

import { AuthService } from "../../service/auth.service";

@Component({
    selector: "app-login-component",
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    userName: string;
    password: string;

    constructor(private authService: AuthService,private router:Router) { }

    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }
    login(value:LoginInterface) {
        this.authService.login(value.userName, value.password);
        this.router.navigate(['/dashboard'])
    }
}
