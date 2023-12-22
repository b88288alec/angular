import {Component, OnInit, ViewChild} from '@angular/core';
import {SampleChildComponent} from "../sample-child/sample-child.component";
import {FormsModule} from "@angular/forms";
import {TwoWayComponent} from "../two-way/two-way.component";
import {SelectionService} from "./selection.service";
import {Person} from "./Person";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [SampleChildComponent, TwoWayComponent, FormsModule, CommonModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css',
  providers: [SelectionService]
})
export class SampleComponent implements OnInit {

  fontSizePx = 16;

  passToChild = 'pass to child';
  passToChildBySetter = 'Yaaaaaa~';
  receiveFromChild = '';

  selectedPerson: Person | undefined;

  @ViewChild(SampleChildComponent)
  private child!: SampleChildComponent;

  constructor(private selectionService: SelectionService) {
    this.selectionService.select$.subscribe((person: Person) => {
      this.selectedPerson = person;
    });
  }

  ngOnInit(): void {
    alert('父元件初始化完了～～～');
  }

  receiveEvent(event: string) {
    this.receiveFromChild = event;
  }

  openS2() {
    this.child.toggleS2Open();
  }

  fetch() {
    this.selectionService.fetch([
      new Person('John', new Date(1999, 1, 1)),
      new Person('Mary', new Date(2003, 2, 2)),
      new Person('Tom', new Date(2011, 3, 3)),
      new Person('Jerry', new Date(2015, 4, 4)),
    ]);
  }

}
