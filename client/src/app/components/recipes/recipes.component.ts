import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Recipe } from '../../Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {
  
  }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((recipes:any) =>{ 
      this.recipes = recipes.info
    }, error => {
      console.log(error)
    });
  }

}
