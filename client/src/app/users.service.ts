import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./User";

// set headers
const HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private userApiUrl = 'http://localhost:8000/api/v1'
    constructor(private http: HttpClient) {

    }
    // getRecipes(): Observable<Recipe[]> {
    //     return this.http.get<Recipe[]>(this.apiUrl);
    // }

    registerUser(name:string, email:string, password:string): Observable<User> {
        const uri = `${this.userApiUrl}/register`;
        return this.http.post<User>(uri, {name, email, password}, HttpOptions);
    }

    loginUser(email:string, password:string) {
        const uri = `${this.userApiUrl}/login`;
        return this.http.post<User>(uri, {email, password}, HttpOptions);
    }

}
