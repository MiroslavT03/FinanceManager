import {Component, OnInit} from '@angular/core';
import {OperationsService} from '../operations.service';
import {Router} from '@angular/router';
import {Operation} from '../operation';

@Component({
  selector: 'app-operation-get',
  templateUrl: './operation-get.component.html',
  styleUrls: ['./operation-get.component.css']
})
export class OperationGetComponent implements OnInit {

  operation: Operation[];

  constructor(private service: OperationsService, private router: Router) {
  }

  ngOnInit() {
    this.service.getOperations()
      .subscribe((data: Operation[]) => {
        this.operation = data;
      });
  }

  operation_add() {
    this.router.navigate(['operation_add']);
  }
}
