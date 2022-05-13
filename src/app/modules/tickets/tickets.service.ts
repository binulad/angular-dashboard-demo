import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  baseUrl = "http://localhost:3000/tickets";

  constructor(private http: HttpClient) { }

  getTickets() {
    return this.http.get(this.baseUrl);
  }
}
