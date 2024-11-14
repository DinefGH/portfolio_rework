import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitTrackerService {

  private apiUrl = 'http://localhost:8000/api/increment-visit/';  // Update with your backend URL

  constructor(private http: HttpClient) { }

  incrementVisit() {
    return this.http.post(this.apiUrl, {});
  }
}