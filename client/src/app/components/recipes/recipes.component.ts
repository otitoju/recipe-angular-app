import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Recipe } from '../../Recipe';
import { TokenStorageService } from 'src/app/session-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  isLoggedIn: boolean = false;

  // let namePattern = /([A-Za-z\-\’])*/;
  // let zipCodePattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
  // let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;

  constructor(
    private recipesService: RecipesService,
    private tokenService: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  
  }

  ngOnInit(): void {
    let token = this.tokenService.getToken();
    if(!token) {
      this.isLoggedIn = true;
    }
    this.recipesService.getRecipes().subscribe((recipes:any) =>{ 
      this.recipes = recipes.info
      console.log(recipes)
    }, error => {
      console.log(error)
    });
  }

  getRecipe(recipeId:any): void {
    this.recipesService.getRecipe(recipeId).subscribe((recipe:any) => {
      console.log(recipe)
      this.router.navigate(['/recipe', recipeId])
    }, (error) => {
      console.log(error)
    })
  }

}
