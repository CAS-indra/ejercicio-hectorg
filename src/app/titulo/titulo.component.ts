import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {
  title = 'Ejercicio 1 de Héctor';

  constructor() { }

  ngOnInit(): void {
  }

}
