import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Menu} from "../../../model/Menu";
import {Restaurant} from "../../../model/Restaurant";
import {MenuService} from "../../../services/menu.service";
import {RestaurantService} from "../../../services/restaurant.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-new',
  templateUrl: './menu-new.component.html',
  styleUrls: ['./menu-new.component.css']
})
export class MenuNewComponent implements OnInit {
  type: string = "FOOD";
  restaurant_id: number;
  restaurants: Restaurant[];

  menuForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    restaurant: new FormControl('', [Validators.required])
  });

  constructor(private menuService: MenuService, private router: Router, private restaurantService: RestaurantService) {
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants = data;
    });
  }

  ngOnInit() {
  }

  get name() {
    return this.menuForm.get('name')
  }

  submit() {
    // todo: id
    this.menuService.create(new Menu(this.name.value, this.type, this.restaurant_id))
      .subscribe(
        res => {
          this.router.navigate(['/menus']);
        },
        err => console.log(err)
      )
  }
}
