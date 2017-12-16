// export class MenuType {
//   static DRINK: String = "drink";
//   static USER: String = "food";
// }

export class Menu {
  id: number;
  type: number;
  name: String;
  restaurant_id: number;
  
  constructor(name?: String, type?: number, restaurant_id?: number, id?: number) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.restaurant_id = restaurant_id;
  }
}