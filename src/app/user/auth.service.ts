import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    currentUser: IUser;

    loginUser(user: string, password: string) : void {
        this.currentUser = {
            id: 1,
            firstName: 'John',
            lastName: 'Papa',
            userName: user
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(newFirstName: string, newLastName: string): void {
        this.currentUser.firstName = newFirstName;
        this.currentUser.lastName = newLastName;
    }
}