import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
    token:string;

    constructor(private router:Router){}

    signUpUser(email:string, password:string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            (error) => console.log(error)
        )
    }

    signInUser(email:string, password:string){
        console.log('calling signIn');
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (response) => {
                firebase.auth().currentUser.getIdToken()
                    .then(
                        (token:string)=> {
                            this.token = token;
                            this.router.navigate(['/recettes']);
                            return this.token;
                        }
                    )
            })
        .catch(
            (error) => {
                console.log('error:', error)
            }
        )
    }

    //firebase enable to rectreive the token in the local storage with this method,
    //but it checks 1st if token is still valid. This means this method is asynchronus
    //and return a promise
    getToken(){
        console.log('getToken is called');
        firebase.auth().currentUser.getIdToken()
        .then(
            (token:string)=> {
                this.token = token;
            }
        )
        return this.token;
    }

    //if token not null, means user is authenticated and return true
    isAuthenticated(){
        return this.token != null;
    }

    logOutUser(){
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }
}