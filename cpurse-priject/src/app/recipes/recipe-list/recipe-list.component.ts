import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Steak', 'Test steak', 'https://i.pinimg.com/564x/b0/a5/4b/b0a54b26b6545c87a07a07aa5a311f8e.jpg'),
    new Recipe('Lasagne', 'Test lasagne', 'https://i.pinimg.com/originals/08/ca/24/08ca240166714b12ccdc074ffaccc40f.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
