import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Menu} from "../../../model/Menu";
import {Restaurant} from "../../../model/Restaurant";
import {MenuService} from "../../../services/menu.service";
import {RestaurantService} from "../../../services/restaurant.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
  type: string = "FOOD";
  restaurant_id: number;
  restaurants: Restaurant[];
  id: number;
  menu: Menu;

  menuForm: FormGroup = new FormGroup({
    name: new FormControl('', []),
    type: new FormControl('', []),
    restaurant: new FormControl('', [])
  });

  constructor(private menuService: MenuService, private router: Router, private restaurantService: RestaurantService, private route: ActivatedRoute) {
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants = data;
    });

    this.route.params.subscribe(
      params => this.id = params.id,
      err => console.log(err)
    )
  }

  ngOnInit() {
    this.menuService.read(this.id)
      .subscribe(
        menu => this.menu = menu,
        err => console.log(err)
      )
  }

  get name() {
    return this.menuForm.get('name')
  }

  submit() {
    this.menuService.update(new Menu(this.name.value, this.type, this.restaurant_id, this.id))
      .subscribe(
        res => {
          this.router.navigate(['/menus']);
        },
        err => console.log(err)
      )
  }
}
