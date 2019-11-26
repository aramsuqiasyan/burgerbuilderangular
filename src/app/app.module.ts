import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BurgerService} from './shared/burger.service';
import { IngredientComponent } from './ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BurgerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
