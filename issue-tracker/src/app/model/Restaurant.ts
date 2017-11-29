import {User} from "./User";

export enum RestaurantStatus {
  ADDED, READY, ONGOING
}

export class Restaurant {
  id: number;
  user: User;
  timeStamp: Date;
  status: RestaurantStatus;
  description: String;
  location: String;
  messages: String[];

  constructor(description?: String, location?: String, status?: RestaurantStatus, timeStamp?: Date, user?: User, id?: number) {
    this.user = user;
    this.timeStamp = timeStamp;
    this.status = status;
    this.description = description;
    this.location = location;
    this.id = id;
  }
}
