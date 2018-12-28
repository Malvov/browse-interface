import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { PeopleService } from '../../services/service.index';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styles: []
})

export class PeopleComponent implements OnInit {

  people: Person[] = [];
  constructor(
    public _peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this._peopleService.getPeople().subscribe( (people: any) => {
      console.log(people);
      this.people = people;
    });
  }
  searchPeople(term: string) {
    this._peopleService.searchPeople(term).subscribe((people: any) => {
      this.people = people;
    });
  }

}
