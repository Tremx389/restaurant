export class Restaurant {
  id: number;
  name: String;
  address: String;
  city_id: number;

  constructor(name?: String, address?: String, city_id?: number, id?: number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city_id = city_id;
  }
}