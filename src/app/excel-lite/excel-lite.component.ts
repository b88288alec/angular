import {Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-excel-lite',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './excel-lite.component.html',
  styleUrl: './excel-lite.component.css'
})
export class ExcelLiteComponent {

  @ViewChild('exContainer')
  public exContainer!: ElementRef;
  @ViewChild('editTextArea')
  public editTextArea!: ElementRef;

// generate an array of arrays with dummy data
  data = new Array(100) // number of rows
  .fill(undefined)
  .map((_, row) => new Array(50) // number of columns
    .fill(undefined)
    .map((_, column) => new CellValue(`Row ${row + 1}, Column ${column + 1}`))
  );

  selectedCell: SelectedCell<unknown> = new SelectedCell(0, 0, new CellValue(''), document.createElement('td'), document.createElement('div'));
  isEditing = false;

  clickCell(target: EventTarget | null, row: number, column: number) {
    if (target) {
      this.selectedCell = new SelectedCell(row, column, this.data[row][column], target as HTMLTableCellElement, this.exContainer.nativeElement);
    }
  }

  editCell() {
    this.isEditing = true;
    const textarea: HTMLTextAreaElement | null = document.querySelector(".ex-cell-edit > textarea");
    if (textarea) {
      setTimeout(() => {
        console.log('focus');
        textarea.focus();
      }, 500);
    }
  }
}

class SelectedCell<T> {
  #containerRect: DOMRect;
  constructor(public row: number, public column: number, public value: CellValue<T>, public el: HTMLTableCellElement, public exContainer: HTMLDivElement) {
    this.#containerRect = exContainer.getBoundingClientRect();
  }

  get clientRect(): DOMRect {
    return this.el.getBoundingClientRect();
  }

  get top(): number {
    return this.clientRect.top - this.#containerRect.top + this.exContainer.scrollTop;
  }

  get left(): number {
    return this.clientRect.left - this.#containerRect.left + this.exContainer.scrollLeft;
  }
}

class CellValue<T> {
  constructor(public value: T, public formula?: string | undefined) {
  }

  get displayValue(): string {
    return this.formula ? `${this.value} (f)` : `${this.value}`;
  }
}
