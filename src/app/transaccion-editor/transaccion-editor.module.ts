import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransaccionEditorRoutingModule } from './transaccion-editor-routing.module';
import { TransaccionEditorComponent } from './transaccion-editor.component';


@NgModule({
  declarations: [
    TransaccionEditorComponent
  ],
  imports: [
    CommonModule,
    TransaccionEditorRoutingModule
  ]
})
export class TransaccionEditorModule { }
