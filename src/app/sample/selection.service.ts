import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Person} from "./Person";

@Injectable()
export class SelectionService {

  private fetchSource = new Subject<Array<Person>>();
  private selectSource = new Subject<Person>();

  public fetch$ = this.fetchSource.asObservable();
  public select$ = this.selectSource.asObservable();

  constructor() { }

  public fetch(persons: Array<Person>) {
    this.fetchSource.next(persons);

  }

  public select(person: Person) {
    this.selectSource.next(person);
  }
}
