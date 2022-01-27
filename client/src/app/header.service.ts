import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// set headers
const HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})

export class HeaderService {
    buttons: any[] = [
        {btnName: "Login", class:"btn btn-outline-success me-2", link: "/signin"},
        {btnName: "Signup", class:"btn btn-outline-primary me-2", link: "/register"},
    ]

    logo:any = "Recipe App"

    private userApiUrl = 'http://localhost:8000/api/v1';

    constructor(private http: HttpClient) {
    }
    
    handleLogo() {
        return this.logo
    }

    handleButtons(): any[]{
        return this.buttons;
    }

}
