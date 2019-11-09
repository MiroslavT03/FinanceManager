import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Category} from './category';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = 'http://localhost:8081/PersonalFinanceManager_war/categories/';

  constructor(private http: HttpClient) {
  }


  getCategories() {
    return this.http.get<Category[]>('http://localhost:8081/PersonalFinanceManager_war/categories/all');
  }

  addCategory(category: Category) {
    return this.http.post<any>(this.url, category);
      // .pipe(catchError(this.errorHandler));
  }
  //
  // errorHandler(error: HttpErrorResponse) {
  //   return throwError(error);
  // }

  updateCategory(category_name, description_name, id) {

    const obj = {
      name: category_name,
      description: description_name
    };
    this
      .http
      .post(`${this.url}${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  editCategory(id) {
    return this
      .http
      .get(`${this.url}${id}`);
  }

  deleteCategory(id) {
    return this
      .http
      .get(`${this.url}${id}`);
  }
}

