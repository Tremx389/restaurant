// export class MenuType {
//   static DRINK: String = "drink";
//   static USER: String = "food";
// }

export class Menu {
  id: number;
  type: String;
  name: String;
  restaurantId: number;
  
  constructor(name?: String, type?: String, restaurantId?: number, id?: number) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.restaurantId = restaurantId;
  }
}