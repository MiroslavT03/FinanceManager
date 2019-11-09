import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {EnrollmentService} from '../enrollment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-get',
  templateUrl: './category-get.component.html',
  styleUrls: ['./category-get.component.css']
})
export class CategoryGetComponent implements OnInit {

  category: Category[];

  constructor(private service: EnrollmentService, private router: Router) {
  }

  ngOnInit() {
    this.service.getCategories()
      .subscribe((data: Category[]) => {
        this.category = data;
      });
  }

  deleteCategory(id) {
    this.service.deleteCategory(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  category_add() {
    this.router.navigate(['category_add']);
  }
}
