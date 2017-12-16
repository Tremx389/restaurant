export class Restaurant {
  id: number;
  name: String;
  address: String;
  city_id: number;

  constructor(id?: number, name?: String, address?: String, city_id?: number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city_id = city_id;
  }
}