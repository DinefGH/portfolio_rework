import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './api-url';

@Injectable({
  providedIn: 'root'
})
export class VisitTrackerService {

  private apiUrl = API_URL;
  
  constructor(private http: HttpClient) { }

  incrementVisit() {
    return this.http.post(this.apiUrl, {});
  }
}