import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Recipe ABC', 'Healthy and fat', 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/2023-08/verduracruda.jpg.webp?itok=3DECGN7j')
  ]


}
