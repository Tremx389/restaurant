export class Review {
  id: number;  

  user_id: number;
  restaurant_id: number;

  constructor(id?: number, user_id?: number, restaurant_id?: number) {
    this.id = id;

    this.user_id = user_id;
    this.restaurant_id = restaurant_id;
  }
}