import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddUpdateTicket, EditTicket, Tickets } from './tickets.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  baseUrl = 'http://localhost:3000/tickets';

  constructor(private http: HttpClient) {}

  // Service for Fetch Tickets Data
  getTickets(): Observable<Tickets[]> {
    return this.http.get<Tickets[]>(this.baseUrl);
  }

  // Service for Add/Update Tickets Data
  addUpdateTicket(ticketData: AddUpdateTicket): Observable<AddUpdateTicket[]> {
    return this.http.post<AddUpdateTicket[]>(this.baseUrl, ticketData);
  }

  // Service for Delete Tickets Data
  deleteTicket(ticketId: any): Observable<Tickets[]> {
    return this.http.delete<Tickets[]>(`${this.baseUrl}/${ticketId}`);
  }

  // Service for get Ticket data from ID
  getTicketById(ticketId: any): Observable<Tickets[]> {
    return this.http.get<Tickets[]>(`${this.baseUrl}/${ticketId}`)
  }

  // Service for Edit Ticket Data
  editTicket(ticketId: any, ticketData: EditTicket[]): Observable<EditTicket[]> {
    return this.http.put<EditTicket[]>(`${this.baseUrl}/${ticketId}`, ticketData);
  }
}
