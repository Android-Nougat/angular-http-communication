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
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z]*'), this.restrictedWords(['foo', 'war'])]);
        this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    isValidLastName() {
        return this.lastName.valid || this.lastName.untouched;
    }

    isValidFirstName() {
        return this.firstName.valid || this.firstName.untouched;
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

    // private restrictedWords(control: FormControl): { [key: string]: any } {
    //     return control.value.includes('foo') ?
    //         { 'restrictedWords': 'foo' } : null;
    // }

    private restrictedWords(values: string[]) {

        console.log(values)

        return (control: FormControl): { [key: string]: any } => {

            let containsRestrincted = values.map((value: string) => {
                console.log('value = ', value);
                console.log('check = ',control.value.includes(value))
                // return control.value.includes(value) ? value : null;
                if(control.value.includes(value))
                return value;
                return null;
            });
            console.log(containsRestrincted)
            containsRestrincted = containsRestrincted.filter(item => item !== null);

            return containsRestrincted && containsRestrincted.length > 0 ?
                { 'restrictedWords': containsRestrincted } : null;
        }
    }

}