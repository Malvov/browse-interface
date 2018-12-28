import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/service.index';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: []
})
export class PersonComponent implements OnInit {

  person: any;
  personId: string;
  constructor(
    public _peopleService: PeopleService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.personId = params['id'];
      this.getPerson(this.personId);
    });
  }

  getPerson(id: string) {
    this._peopleService.getPerson(id).subscribe( (res: any) => {
      this.person = res;
      console.log(this.person);
    });
  }
}
