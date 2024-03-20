import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, RowClassRules } from 'ag-grid-community';
import 'ag-grid-enterprise';
import {GetContextMenuItems, GetContextMenuItemsParams, MenuItemDef} from "ag-grid-enterprise";
import {GeneralRowData} from "./model/GeneralRowData";
import {TooltipComponent} from "./component/tooltip/tooltip.component";
import {FormsModule} from "@angular/forms";
import {CellRenderComponent} from "./component/cell-render/cell-render.component";
import {HeaderRenderComponent} from "./component/header-render/header-render.component";
import {rowData} from "./model/data";
import {IRowData} from "./model/IRowData";
import {IFaData} from "./model/IFaData";

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular, CommonModule, TooltipComponent, FormsModule, CellRenderComponent, HeaderRenderComponent],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css'
})
export class AgGridComponent {
  themeClass =
    "ag-theme-alpine";

  public lockedTime = new Set<string>();

  // Row Data: The data to be displayed.
  public rowData = rowData;

  // // Column Definitions: Defines the columns to be displayed.
  public colDefs: ColDef<IRowData<unknown>, string | number>[] = [
    { headerName: "會計科目", field: "accountName" },
    { headerName: "2021-12-31",
      headerComponent: HeaderRenderComponent,
      headerComponentParams: { lockTime: this.lockedTime },
      editable: params => !this.lockedTime.has("2021-12-31"),
      valueGetter: params => params.data?.getValue("2021-12-31"),
      valueSetter: params => {
        params.data.setValue("2021-12-31", params.newValue as number);
        return true;
      },
      tooltipField: "data",
      tooltipComponent: TooltipComponent,
      tooltipComponentParams: { time: "2021-12-31" },
      cellRenderer: CellRenderComponent
    },
    { headerName: "2022-12-31",
      headerComponent: HeaderRenderComponent,
      headerComponentParams: { lockTime: this.lockedTime },
      editable: params => !this.lockedTime.has("2022-12-31"),
      valueGetter: params =>  params.data?.getValue("2022-12-31"),
      valueSetter: params => {
        params.data.setValue("2022-12-31", params.newValue as number);
        return true;
      },
      tooltipField: "data",
      tooltipComponent: TooltipComponent,
      tooltipComponentParams: { time: "2022-12-31" },
      cellRenderer: CellRenderComponent
    },
    { headerName: "2023-12-31",
      headerComponent: HeaderRenderComponent,
      headerComponentParams: { lockTime: this.lockedTime },
      editable: params => !this.lockedTime.has("2023-12-31"),
      valueGetter: params => params.data?.getValue("2023-12-31"),
      valueSetter: params => {
        params.data.setValue("2023-12-31", params.newValue as number);
        return true;
      },
      tooltipField: "data",
      tooltipComponent: TooltipComponent,
      tooltipComponentParams: { time: "2022-12-31" },
      cellRenderer: CellRenderComponent
    }
  ];

  public focusedCellData?: FocusedCellData;
  public getContextMenuItems(): GetContextMenuItems {
    const self = this;
    return (params: GetContextMenuItemsParams): (string | MenuItemDef)[] => {
      return [
        "cut",
        "copy",
        "paste",
        {
          name: "新增備註",
          action: params => {
            if (params.column) {
              const time = params.column.getColDef().headerName;
              self.focusedCellData = new FocusedCellData(params.node?.data.accountName, time as string, params.node?.data as GeneralRowData);
            }
          }
        }
      ];
    }
  }

  public toggleLockTime(event: Event) {
    if (event.target) {
      // @ts-ignore
      const time = event.target.name;
      if (this.lockedTime.has(time)) {
        this.lockedTime.delete(time);
      } else {
        this.lockedTime.add(time);
      }
    }
  }

  public rowClassRules: RowClassRules<IRowData<unknown>> = {
    "summary-row": params => {
      if (params.data) {
        return params.data.isSummary;
      }
      return false;
    }
  };

}

class FocusedCellData {
  constructor(
    public accountName: string,
    public time: string,
    public data: IRowData<IFaData>,
  ) {}

  get remark(): string | undefined {
    return this.data.data.filter(item => item.time === this.time)[0].remark;
  }

  set remark(value: string | undefined) {
    if (value) {
      this.data.data.filter(item => item.time === this.time)[0].remark = value;
    }
  }
}

