import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


export type Transaccion = {
  id: string;
  name: string;
  description: string;
  kind: string;
  amount: number;
  date: Date;
  projectId: string;
  ownerId: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  // private transacciones: Transaccion[] =  [
  //   {
  //     id: 'design_a_virus',
  //     name: 'Design a virus',
  //     description: 'Design a modified version of a current virus',
  //     kind: 'spent',
  //     amount: 500,
  //     date: new Date(2020, 0, 1),
  //     projectId: 'rule_the_world',
  //     ownerId: 'world_admin',
  //   },
  //   {
  //     id: 'produce_the_virus',
  //     name: 'produce the virus',
  //     description: 'Clone the virus in a secret lab',
  //     kind: 'spent',
  //     amount: 1200,
  //     date: new Date(2020, 1, 1),
  //     projectId: 'rule_the_world',
  //     ownerId: 'world_admin',
  //   },
  //   {
  //     id: 'buy_fuel',
  //     name: 'Buy fuel',
  //     description: 'A lot of fuel ',
  //     kind: 'spent',
  //     amount: 900,
  //     date: new Date(2024, 0, 1),
  //     projectId: 'conquer_mars',
  //     ownerId: 'world_admin',
  //   },
  //   {
  //     id: 'sell_view_seats',
  //     name: 'Sell view seats',
  //     description: 'Seats to view launches ',
  //     kind: 'income',
  //     amount: 80,
  //     date: new Date(2025, 0, 1),
  //     projectId: 'conquer_mars',
  //     ownerId: 'world_admin',
  //   },
  // ];

  // private readonly urlBase = 'https://proton-angular-builders.herokuapp.com/v1/transactions/';
  private readonly url = environment.apiUrl + 'transactions/';

  constructor(private http: HttpClient) {}

  // public getTransacciones(): Transaccion[] {
  //   return this.transacciones;
  // }

  public getTransacciones$(): Observable<Transaccion[]> {
    return this.http
               .get<{ data: Transaccion[] }>(this.url)
               .pipe(map(res => res.data));
  }

  public getTransaccionById$( id: string ): Observable<Transaccion> {
    return this.http
               .get<{ data: Transaccion }>(this.url + id)
               .pipe(map(res => res.data));
  }

  public postTransaccion$(transaccion: Transaccion): Observable<Transaccion> {
    return this.http.post<{ data: Transaccion }>(this.url, transaccion).pipe(map(res => res.data));
  }

  public putTransaccion$(transaccion: Transaccion): Observable<Transaccion> {
    return this.http
      .put<{ data: Transaccion }>(this.url + transaccion.id, transaccion)
      .pipe(map(res => res.data));
  }

  public deleteTransaccionById(id: string): Observable<void> {
    return this.http.delete<void>(this.url + id);
  }
}
