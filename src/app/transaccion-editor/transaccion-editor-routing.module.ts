import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionEditorComponent } from './transaccion-editor.component';

const routes: Routes = [{ path: ':id', component: TransaccionEditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionEditorRoutingModule { }
