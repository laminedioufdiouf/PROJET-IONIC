import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import { tokenName } from '@angular/compiler';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = false;
    token:any;
    _transfere: string;
    headers: HttpHeaders | { [header: string]: string | string[]; };
    constructor(
        private http: HttpClient,
        private storage: NativeStorage,
        private env: EnvService,
    ) { }
    login(username: String, password: String) {
        return this.http.post<any>(this.env.API_URL, 
            {username: username, password: password}).pipe(
            
            tap(token => {
                
                this.storage.setItem('token',token)
                    .then(
                        () => {
                            console.log('Token Stored');
                        },
                        error => console.error('Error storing item', error)
                    );
                this.token = token;
                this.isLoggedIn = true;
                return token;
            }),
        );
    }
    transfere(nomexp: String, prenomexp: String, telephoneexp: Number, nomrecep: String, prenomrecep: String, telephonerecep: Number, montantenvoie: Number, montanttotal: Number, numerocompte: Number) {
        var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
        return this.http.post<any>(this.env.API_ULL ,
          {nomexp: nomexp, prenomexp: prenomexp, telephoneexp: telephoneexp, nomrecep: nomrecep, prenomrecep: prenomrecep, telephonerecep:telephonerecep, montantenvoie: montantenvoie, montanttotal: montanttotal, numerocompte: numerocompte} , {headers:headers}
        )
      }
    
    retrait(  Codeenvoie: number) {
        return this.http.post(this.env.API_UCL ,
            {  Codeenvoie:Codeenvoie}
        )
    }
    register(fName: String, lName: String, username: String, password: String) {
        return this.http.post(this.env.API_URL ,
            {fName: fName, lName: lName, username: username, password: password}
        )
    }
    logout() {
        const headers = new HttpHeaders({
            'Authorization': this.token["token_type"]+" "+this.token["access_token"]
        });
        return this.http.get(this.env.API_URL, { headers: headers })
            .pipe(
                tap(data => {
                    this.storage.remove("token");
                    this.isLoggedIn = false;
                    delete this.token;
                    return data;
                })
            )
    }
    user() {
        const headers = new HttpHeaders({
            'Authorization': this.token["token_type"]+" "+this.token["access_token"]
        });
        return this.http.get<User>(this.env.API_URL , { headers: headers })
            .pipe(
                tap(user => {
                    return user;
                })
            )
    }
    // getToken() {
    //     return this.storage.getItem('token').then(
    //         data => {
    //             this.token = data;
    //             if(this.token != null) {
    //                 this.isLoggedIn=true;
    //             } else {
    //                 this.isLoggedIn=false;
    //             }
    //         },
    //         error => {
    //             this.token = null;
    //             this.isLoggedIn=false;
    //         }
    //     );
    // }
      getToken() {
        return localStorage.getItem('token');
    }
}
