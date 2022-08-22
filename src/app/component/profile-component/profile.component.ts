import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/service/auth.service';

import { ProfileInterface } from '../../interface';

import { Router } from "@angular/router";

@Component({
    selector: 'app-profile-component',
    templateUrl: './profile.component.html',
    styles: [`
        em{float:right;color:red}
        .error{background:#fecaca}
    `]
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    constructor(public authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
        this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    isValidLastName() {
        return this.lastName.valid || this.lastName.touched;
    }

    isValidFirstName() {
        return this.firstName.valid || this.firstName.touched;
    }

    save(profile: ProfileInterface) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(profile);
            this.router.navigate(['dashboard']);
        }
    }

    cancel() {
        this.router.navigate(['dashboard']);
    }

}