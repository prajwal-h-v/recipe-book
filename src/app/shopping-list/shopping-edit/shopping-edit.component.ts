import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredientToList = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') ingNameRef: ElementRef;
  @ViewChild('amountInput') imgAmRef: ElementRef;

  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit(): void {}
  addIngredients() {
    const Iname = this.ingNameRef.nativeElement.value;
    const Iamount = this.imgAmRef.nativeElement.value;

    const ingredient = new Ingredient(Iname, Iamount);
    this.shoppinglistService.addIngredient(ingredient);
  }
}
