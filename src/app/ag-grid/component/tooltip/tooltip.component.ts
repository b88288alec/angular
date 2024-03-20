import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ITooltipAngularComp } from 'ag-grid-angular';
import { ITooltipParams } from 'ag-grid-community';
import {GeneralRowData} from "../../model/GeneralRowData";

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent implements ITooltipAngularComp {
  private params!: { time: string } & ITooltipParams;
  public data!: GeneralRowData;
  public remark?: string;

  agInit(params: { time: string } & ITooltipParams): void {
    this.params = params;
    this.data = params.api!.getDisplayedRowAtIndex(params.rowIndex!)!.data;
    if (!this.data.isSummary) {
      this.remark = this.data.data.filter(item => item.time === params.time)[0].remark;
    }
  }

}
