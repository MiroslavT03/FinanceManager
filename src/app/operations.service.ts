import { Injectable } from '@angular/core';
import {Operation} from './operation';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  url = 'http://localhost:8081/PersonalFinanceManager_war/operations/';
  constructor(private http: HttpClient) { }

  getOperations() {
    return this.http.get<Operation[]>('http://localhost:8081/PersonalFinanceManager_war/operations/all');
  }
  addOperation(operation: Operation) {
    return this.http.post<any>(this.url, operation);
  }
}
