import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://127.0.0.1:8000";

  constructor( private http:HttpClient) { }

  getTicket():Observable<any>{
    return this.http.get<any[]>(this.APIUrl + '/Tickets/');
  }

  getTicketList():Observable<any>{
    return this.http.get<any[]>(this.APIUrl + '/Tickets/');
  }

  addTicket(val:any){
    return this.http.post(this.APIUrl + '/Tickets/',val);
  }

  updateTicket(val:any){
    return this.http.put(this.APIUrl + '/Tickets/',val);
  }

  deleteTicket(val:any){
    return this.http.delete(this.APIUrl + '/Tickets/',val);
  }
}
