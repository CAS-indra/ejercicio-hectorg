import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-transaccion-editor',
  templateUrl: './transaccion-editor.component.html',
  styleUrls: ['./transaccion-editor.component.scss']
})
export class TransaccionEditorComponent implements OnInit {
  public transaccionId = '';
  public transaccion = { id: '', name: '', description: '', kind: '', amount: 0, date: new Date, projectId: '', ownerId: ''};

  constructor(private route: ActivatedRoute, private transaccionesService: TransaccionesService) { }

  ngOnInit(): void {
    this.transaccionId = this.route.snapshot.params['id'];
    const transacciones = this.transaccionesService.getTransacciones();
    this.transaccion = transacciones.find(t => t.id === this.transaccionId);
  }

}
