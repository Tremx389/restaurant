export class Restaurant {
  id: number;
  name: String;
  address: String;
  cityId: number;

  constructor(name?: String, address?: String, city?: number, id?: number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.cityId = city;
  }
}