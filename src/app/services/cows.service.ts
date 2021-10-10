import { ICow } from 'src/app/models/Cow';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CowsService {
  constructor(private http: HttpClient) {}

  getAllCows(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/cows');
  }

  getOneCow(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/cows/${id}`);
  }

  deleteCow(id: number) {
    return this.http.delete(`http://localhost:3000/cows/${id}`);
  }

  createCow(cow: ICow): Observable<ICow> {
    return this.http.post<ICow>(`http://localhost:3000/cows`, cow);
  }

  updateCow(cow: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/cows/${cow.id}`, cow);
  }

  getRecordsSum(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/sum`);
  }

  getTotalMilk(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/milk-sum`);
  }
}
