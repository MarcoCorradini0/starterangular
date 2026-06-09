import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prenotazione } from '../models/prenotazione';

@Injectable({
  providedIn: 'root',
})
export class PrenotazioneService {
  private api = 'http://localhost:8080/prenotazioni';
  constructor(private http: HttpClient){}

  getAll(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.api);
  }

  create(data: Prenotazione): Observable<Prenotazione> {
    return this.http.post<Prenotazione>(this.api, data);
  }

  update(id: number, data: Prenotazione): Observable<Prenotazione> {
    return this.http.put<Prenotazione>(`${this.api}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
