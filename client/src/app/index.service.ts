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

export class IndexService {
    indexImage: string = "./assets/fast-food-menu.svg";
    content:any = [
        {title1: "Become a", title2: "Food Expert.", cnt: "“Owners of dogs will have noticed that, if you provide them with food and water and shelter and affection, they will think you are god. Whereas owners of cats are compelled to realize that, if you provide them with food and water and shelter and affection, they draw the conclusion that they are gods.”", class:"lead my-4", btnClass:"btn btn-primary btn-lg", btnText:"Explore"},
    ]

    private userApiUrl = 'http://localhost:8000/api/v1';

    constructor(private http: HttpClient) {
    }
    
    handleContent():any[] {
        return this.content
    }

    handleIndexImage() {
        return this.indexImage;
    }

}
