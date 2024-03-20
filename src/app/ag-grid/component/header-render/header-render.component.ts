import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';

@Component({
  selector: 'app-header-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-render.component.html',
  styleUrl: './header-render.component.css'
})
export class HeaderRenderComponent implements IHeaderAngularComp {
  protected params!: { lockTime: Set<string> } & IHeaderParams;

  agInit(params: { lockTime: Set<string> } & IHeaderParams): void {
    this.params = params;
  }

  refresh(params: { lockTime: Set<string> } & IHeaderParams): boolean {
    this.params = params;
    return true;
  }

  get isLocked(): boolean {
    return this.params.lockTime.has(this.params.displayName);
  }

}
