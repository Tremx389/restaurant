import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {City} from "../../../model/City";
import {CityService} from "../../../services/city.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  city: City = new City();
  id: number;

  cityForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(private cityService: CityService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(
      params => this.id = params.id,
      err => console.log(err)
    )
  }

  ngOnInit() {
    this.cityService.read(this.id)
      .subscribe(
        city => this.city = city,
        err => console.log(err)
      )
  }

  get name() {
    return this.cityForm.get('name')
  }

  submit() {
    // todo: id
    this.cityService.update(this.city)
      .subscribe(
        res => {
          this.router.navigate(['/cities']);
        },
        err => console.log(err)
      )
  }
}
