import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "app/component/login-component/login.component"
import { AuthService } from "app/service/auth.service"

import { RouterTestingModule } from '@angular/router/testing';

import { LoginInterface } from "app/interface";

describe('login compoentn', () => {
    let loginComponent: LoginComponent,
        authService: AuthService,
        user: LoginInterface = { userName: 'ginny', password: "weasley" },
        routerTestingModule: RouterTestingModule;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LoginComponent, AuthService],
            imports: [RouterTestingModule]
        })
        loginComponent = TestBed.inject(LoginComponent);
        authService = TestBed.inject(AuthService);
    })

    it('first test', () => {
        loginComponent.login(user);
        expect(authService.currentUser.userName).toBe(user.userName);
    })
})