import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:8080/category/getAll');
  }
}
