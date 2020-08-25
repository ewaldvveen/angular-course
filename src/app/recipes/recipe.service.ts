import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe Name',
      'Test Recipe Desc',
      'https://c1.wallpaperflare.com/preview/332/260/870/egypt-egyptian-kebda-liver-pasta-food.jpg',
      [new Ingredient('NewIng-1', 8), new Ingredient('NewIng-2', 3)]
    ),
    new Recipe(
      'Test Recipe Name 2',
      'Test Recipe Desc 2',
      'https://p0.pikist.com/photos/903/653/hamburger-foot-burger-cholesterol-menu-fried-fast-food-tomato-gastronomy.jpg',
      [new Ingredient('NewIng-3', 5), new Ingredient('NewIng-4', 11)]
    ),
  ];

  getRecipes(): any {
    return this.recipes.slice(); // Copies the recipces into a new array
  }
}
