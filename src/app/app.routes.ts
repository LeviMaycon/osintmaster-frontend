import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScannerComponent } from './scanner/scanner.component';

export const routes: Routes = [
  { path: 'scanner', component: ScannerComponent },
  { path: '', redirectTo: '/scanner', pathMatch:  'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
