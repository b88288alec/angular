import {Component, Input, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ListSampleComponent} from "../list-sample/list-sample.component";

@Component({
  selector: 'app-sample-child',
  standalone: true,
  imports: [FormsModule, CommonModule, ListSampleComponent],
  templateUrl: './sample-child.component.html',
  styleUrl: './sample-child.component.css'
})
export class SampleChildComponent {

  @Input()
  fromParent = 'from parent';

  #fromParentBySetter = 'from parent by setter';
  @Input()
  get fromParentBySetter() {
    return this.#fromParentBySetter;
  }
  set fromParentBySetter(value) {
    this.#fromParentBySetter = "(^з^)-☆" + value;
  }

  inputVal = '按旁邊的「發送」可以把這串字送到父元件';
  @Output()
  triggerEvent = new EventEmitter<string>();
  fireEvent() {
    this.triggerEvent.emit(this.inputVal);
  }

  isOpen = false;
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  isS2Open = false;
  toggleS2Open() {
    this.isS2Open = !this.isS2Open;
  }

}
