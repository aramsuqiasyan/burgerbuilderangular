import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BurgerService} from '../shared/burger.service';
import {Layer} from '../models/layer.model';
import {Ingredient} from '../models/ingredient.model';


@Component({
    selector: 'app-ingredient',
    templateUrl: './ingredient.component.html',
    styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
    @Input() ingredient;
    @Output() onDelete = new EventEmitter();
    @Output() onChange = new EventEmitter();
    layers:Layer[] = [];

    constructor(
        private layerService:BurgerService
    ){}

    changeLayer(ingType){
        if(this.ingredient.allowChange){
            const {img,type,price} = this.layers.find(l => l.type == ingType);
            this.ingredient = new Ingredient(type,img,true,price,this.ingredient.id);
            let ingredient = this.ingredient;
            this.onChange.emit(ingredient)
        }
    }

    deleteIngredient(){
        let { id } = this.ingredient;
        this.onDelete.emit(id)
    }

    ngOnInit(): void {
        this.layers = this.layerService.getLayers();
    }

}
