import { Component, OnInit } from '@angular/core';
import {SelectionService} from "../sample/selection.service";
import {CommonModule} from "@angular/common";
import {Person} from "../sample/Person";

@Component({
  selector: 'app-list-sample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-sample.component.html',
  styleUrl: './list-sample.component.css'
})
export class ListSampleComponent {

  data: Array<Person> = [];

  constructor(private selectionService: SelectionService) {
    this.selectionService.fetch$.subscribe((persons: Array<Person>) => {
      this.data = persons;
    });
  }

  select(person: Person) {
    this.selectionService.select(person);
  }

}
