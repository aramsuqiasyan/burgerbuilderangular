import {Component, OnInit} from '@angular/core';
import {Ingredient} from './models/ingredient.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    ingredients: Ingredient[] = [
        new Ingredient(1,'topBred.png',false,400,null),
        new Ingredient(7,'bottomBred.png',false,400,null)
    ];
    id = 1;
    total = 0;
    isPreview = false;
    changeTotalPrice(startPrice){
        this.total = this.ingredients.reduce((total,current)=>{
            total += current.price;
            return total;
        },startPrice)
    }
    onAddLayer() {
        const ing = new Ingredient(5, 'meet.png', true,500,this.id++);
        this.ingredients.splice(1, 0, ing);
        this.changeTotalPrice(0)
    }
    onDelete(id) {
        const idx = this.ingredients.findIndex(ing => ing.id === id);
        this.ingredients.splice(idx, 1);
        this.changeTotalPrice(0)
    }
    onChange(ingredient){
        let idx = this.ingredients.findIndex(i=>i.id === ingredient.id);
        this.ingredients.splice(idx,1,ingredient);
        this.changeTotalPrice(0);
    }
    ngOnInit(): void {
       this.changeTotalPrice(this.total)
    }
}
