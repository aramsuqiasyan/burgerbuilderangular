export class Ingredient {
  constructor(
      public type:number,
      public img:string,
      public allowChange:boolean,
      public price:number,
      public id?:number
  ){}
}
