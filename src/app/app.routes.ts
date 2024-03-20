import { Routes } from '@angular/router';
import { SampleComponent } from "./sample/sample.component";
import { ExcelLiteComponent } from "./excel-lite/excel-lite.component";
import {AgGridComponent} from "./ag-grid/ag-grid.component";

export const routes: Routes = [
    { path: '', redirectTo: 'sample', pathMatch: 'full' },
    { path: 'sample', component: SampleComponent },
    { path: 'excel', component: ExcelLiteComponent },
    { path: 'ag-grid', component: AgGridComponent }
];
