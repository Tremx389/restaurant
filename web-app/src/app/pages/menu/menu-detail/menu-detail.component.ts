import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Menu} from "../../../model/Menu";
import {MenuService} from "../../../services/menu.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
  menu: Menu = new Menu();
  id: number;

  menuForm: FormGroup = new FormGroup({
    name: new FormControl('', [])
  });

  constructor(private menuService: MenuService,
              private route: ActivatedRoute,
              private router: Router) {
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
    this.menuService.update(this.menu)
      .subscribe(
        res => {
          this.router.navigate(['/menus']);
        },
        err => console.log(err)
      )
  }
}
