import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Recipe } from "./Recipe";

// set headers
const HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})

export class RecipesService {
    private apiUrl = 'http://localhost:8000/api/v1'
    
    constructor(private http: HttpClient) {

    }
    getRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${this.apiUrl}/recipes`);
    }

    getRecipe(id:any): Observable<Recipe> {
        return this.http.get<Recipe>(`${this.apiUrl}/recipe/${id}`);
    }

    addRecipe(name:string, content:string, phot:string): Observable<Recipe> {
        return this.http.post<Recipe>(`${this.apiUrl}/recipe`, {name, content, phot}, HttpOptions)
    }
}

// [
//     {name: 'Burger', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque incidunt nobis nisi perferendis fugit.', img:"../../../assets/chinabox.svg"}, 
//     {name: 'Burger', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque incidunt nobis nisi perferendis fugit.', img:"../../../assets/1545450534.svg"},
//     {name: 'Burger', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque incidunt nobis nisi perferendis fugit.', img:"../../../assets/fast-food-menu.svg"},
//     {name: 'Burger', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque incidunt nobis nisi perferendis fugit.', img:"../../../assets/Gerald-G-Fast-Food-Drinks-FF-Menu-2.svg"},
//     {name: 'Burger', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque incidunt nobis nisi perferendis fugit.', img:"../../../assets/Gerald-G-Fast-Food-Drinks-FF-Menu-4.svg"},
//     {name: 'Burger', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque incidunt nobis nisi perferendis fugit.', img:"../../../assets/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-6.svg"},
// ]