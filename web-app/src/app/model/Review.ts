export class Review {
  id: number;  

  user_id: number;
  restaurant_id: number;
  rating: number;

  constructor(user_id?: number, rating?: number, restaurant_id?: number, id?: number) {
    this.id = id;
    this.rating = rating;

    this.user_id = user_id;
    this.restaurant_id = restaurant_id;
  }
}