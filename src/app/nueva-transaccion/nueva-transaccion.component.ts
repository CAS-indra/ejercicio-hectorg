import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-nueva-transaccion',
  templateUrl: './nueva-transaccion.component.html',
  styleUrls: ['./nueva-transaccion.component.scss']
})
export class NuevaTransaccionComponent implements OnInit {
  public formGroup: FormGroup;
  public message = '';

  constructor(public fb: FormBuilder, private transaccionesService: TransaccionesService) {
    this.formGroup = fb.group({
      id: new FormControl('Id_transacction', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(40)
      ]),
      name: new FormControl('nombre', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(40),
      ]),
      description: new FormControl('descripción'),
      kind: new FormControl('tipo de transacción', [
        Validators.required
      ]),
      amount: new FormControl(500, [
        Validators.required,
        Validators.min(50),
        Validators.max(1000000)
      ]),
      date: new FormControl(new Date()),
      projectId: new FormControl('JAJAJA'),
      ownerId: new FormControl('JEJEJEJE')
    });
  }

  ngOnInit(): void {
  }

  public submitTransaccion(): void {
    console.log('Enviando....');
    console.log(this.formGroup.value);
    //TODO: llamar al servicio y hacer el post
    this.transaccionesService.postTransaccion$(this.formGroup.value).subscribe({
      error: err => (this.message = err.message),
    });
  }
}
