export class Review {
  id: number;  

  user: number;
  restaurant: number;
  rating: number;

  constructor(id?: number, user?: number, rating?: number, restaurant?: number) {
    this.id = id;
    this.rating = rating;

    this.user = user;
    this.restaurant = restaurant;
  }
}