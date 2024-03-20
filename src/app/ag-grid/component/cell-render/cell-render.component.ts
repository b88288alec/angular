import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from "ag-grid-enterprise";
import {GeneralRowData} from "../../model/GeneralRowData";

@Component({
  selector: 'app-cell-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell-render.component.html',
  styleUrl: './cell-render.component.css'
})
export class CellRenderComponent implements ICellRendererAngularComp {
  protected params!: ICellRendererParams;
  private data?: GeneralRowData;

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.data = params.data;
  }

  refresh(params: ICellRendererParams<any>): boolean {
    this.params = params;
    return true;
  }

  get hasRemark(): boolean {
    const headerName = this.params.column?.getColDef().headerName;
    if (headerName && this.data && !this.data.isSummary) {
      const remark = this.data.data.filter(item => item.time === headerName)[0].remark;
      return remark !== undefined && remark !== "";
    }
    return false;
  }

}
