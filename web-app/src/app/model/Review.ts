export class Review {
  id: number;  

  userId: number;
  restaurantId: number;
  rating: number;

  constructor(userId?: number, rating?: number, restaurantId?: number, id?: number) {
    this.id = id;
    this.rating = rating;

    this.userId = userId;
    this.restaurantId = restaurantId;
  }
}