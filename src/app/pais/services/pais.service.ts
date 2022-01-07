import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries, ErrorPais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v2";

  constructor(private http : HttpClient) { }



  buscarPais(termino : string): Observable<Countries[] | ErrorPais>
  {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Countries[] | ErrorPais>(url);
  }


}