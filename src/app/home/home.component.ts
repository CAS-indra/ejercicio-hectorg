import { Component, Injectable, OnInit } from '@angular/core';
import { Transaccion, TransaccionesService } from '../data/transacciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public transacciones: Transaccion[] = [];
  public color = 'grey';
  public balance = 0;

  constructor(private transaccionesService: TransaccionesService) { }

  ngOnInit(): void {
    this.transaccionesService.getTransacciones$().subscribe(
      resp =>{
        this.transacciones = resp;
        this.balance = this.calcularBalance();
      }
    );
  }

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
