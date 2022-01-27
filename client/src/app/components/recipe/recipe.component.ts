import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Recipe } from '../../Recipe';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe:any = "";

  constructor(
    private recipeService:RecipesService,
    private route: ActivatedRoute,
    private router: Router
    ) { }
  //recipeId: string = ''

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    console.log(recipeId)
    this.getRecipe(recipeId);
  }

  getRecipe(id:any): void {
    this.recipeService.getRecipe(id).subscribe((recipe:any) => {
      this.recipe = recipe.info;
    }, (error) => {
      console.log(error)
    })
  }

  goBack(): void {
    window.history.back();
  }
  
}
