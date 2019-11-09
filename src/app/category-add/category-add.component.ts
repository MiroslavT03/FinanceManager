import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import {EnrollmentService} from '../enrollment.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  errorMsg = '';
  categoryModel = new Category( 1, '', '', '', '');

  constructor(private router: Router, private enrollmentService: EnrollmentService) { }


  onSubmit(categoryModel: Category) {
    this.categoryModel = categoryModel;
    this.enrollmentService.addCategory(this.categoryModel)
      .subscribe(
        data => {
          console.log('Success', data),
            error => this.errorMsg = error.statusText;
          alert('Категорію додано успішно!');
          this.router.navigate(['category']);
        });
  }

  ngOnInit() {
  }
}
