import { Routes } from '@angular/router';
import { SampleComponent } from "./sample/sample.component";
import { ExcelLiteComponent } from "./excel-lite/excel-lite.component";

export const routes: Routes = [
    { path: '', redirectTo: 'sample', pathMatch: 'full' },
    { path: 'sample', component: SampleComponent },
    { path: 'excel', component: ExcelLiteComponent },
];
