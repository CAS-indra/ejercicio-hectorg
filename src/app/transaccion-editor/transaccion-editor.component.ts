import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaccion, TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-transaccion-editor',
  templateUrl: './transaccion-editor.component.html',
  styleUrls: ['./transaccion-editor.component.scss']
})
export class TransaccionEditorComponent implements OnInit {
  // public transaccionId = '';
  // public transaccion = { id: '', name: '', description: '', kind: '', amount: 0, date: '', projectId: '', ownerId: ''};
  public transaccion: Transaccion | undefined;
  public transaccion$: Observable<any>;

  constructor(private route: ActivatedRoute, private transaccionesService: TransaccionesService) {
    const transaccionId = this.route.snapshot.params['id'];
    this.transaccion$ = this.transaccionesService.getTransaccionById$(transaccionId);
   }

  ngOnInit(): void {
    // const transaccionId = this.route.snapshot.params['id'];
    // const transacciones = this.transaccionesService.getTransacciones$().subscribe( res => {
    //   this.transaccion = transacciones?.find(t => t.id === transaccionId);
    // });
    // this.transaccion$ = this.transaccionesService.getTransaccionById$(transaccionId);
  }

}
