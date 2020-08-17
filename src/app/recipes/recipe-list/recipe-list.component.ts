import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe Name',
      'Test Recipe Desc',
      'https://c1.wallpaperflare.com/preview/332/260/870/egypt-egyptian-kebda-liver-pasta-food.jpg'
    ),
    new Recipe(
      'Test Recipe Name 2',
      'Test Recipe Desc 2',
      'https://p0.pikist.com/photos/903/653/hamburger-foot-burger-cholesterol-menu-fried-fast-food-tomato-gastronomy.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
