import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {City} from "../../../model/City";
import {CityService} from "../../../services/city.service";

@Component({
  selector: 'app-city-new',
  templateUrl: './city-new.component.html',
  styleUrls: ['./city-new.component.css']
})
export class CityNewComponent implements OnInit {
  cityForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(private cityService: CityService) {

  }

  ngOnInit() {
  }

  get name() {
    return this.cityForm.get('name')
  }


  submit() {
    // todo: id
    this.cityService.create(new City(this.name.value))
      .subscribe(
        res => res,
        err => console.log(err)
      )
  }
}
