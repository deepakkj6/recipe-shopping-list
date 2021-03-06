import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipeSelected = new EventEmitter();
    
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simple a test', 'assets/recipe_logo.jpeg',[new Ingredient('frenchfries', 3), new Ingredient('buns',2)]),
                new Recipe('Another Test Recipe', 'This is simple a test', 'assets/recipe_logo.jpeg',[new Ingredient('meat', 3), new Ingredient('buns',5)]),
      ];

      constructor(private shoppingListService: ShoppingListService){};

       getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
}

