import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {EnrollmentService} from '../enrollment.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categoryForm: FormGroup;
  category: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bs: EnrollmentService,
              private fb: FormBuilder) {
    this.createForm();
  }



  createForm() {
    this.categoryForm = this.fb.group({
      category_name: ['', Validators.required ],
      description_name: ['', Validators.required ]
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editCategory(params.id).subscribe(res => {
        this.category = res;
      });
    });
  }

  updateCategory(category_name, description_name) {
    this.route.params.subscribe(params => {
      this.bs.updateCategory(category_name, description_name, params.id);
      this.router.navigate(['category']);
    });
  }
}
