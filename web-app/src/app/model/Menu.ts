// export class MenuType {
//   static DRINK: String = "drink";
//   static USER: String = "food";
// }

export class Menu {
  id: number;
  type: number;
  name: String;
  restaurantId: number;
  
  constructor(name?: String, type?: number, restaurantId?: number, id?: number) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.restaurantId = restaurantId;
  }
}