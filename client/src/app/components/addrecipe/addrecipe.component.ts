import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {
  name: string = ""
  content: string = ""
  phot: string = ""

  constructor(private service: RecipesService) { }

  ngOnInit(): void {
  }

  handleAddRecipe(): void {
    this.service.addRecipe(this.name, this.content, this.phot).subscribe((res:any) => {
      console.log(res)
    }, (error) => {
      console.log(error)
    })
  }

}
