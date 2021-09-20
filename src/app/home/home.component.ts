import { Component, Injectable, OnInit } from '@angular/core';
import { TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private transaccionesService: TransaccionesService) { }
  public transacciones = this.transaccionesService.getTransacciones();

  public color = 'grey';

  public balance = this.calcularBalance();

  public calcularBalance(): number{
    let total = 0
    this.transacciones.forEach(element => {
      if(element.kind == 'spent') {
        total -= element.amount;
      } else {
        total += element.amount;
      }
    });
    return total;
  }

}
