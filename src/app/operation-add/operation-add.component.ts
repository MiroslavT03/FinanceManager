import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OperationsService} from '../operations.service';
import {Operation} from '../operation';

@Component({
  selector: 'app-operation-add',
  templateUrl: './operation-add.component.html',
  styleUrls: ['./operation-add.component.css']
})
export class OperationAddComponent implements OnInit {

  operationModel = new Operation( 1, '', '', '', '');

  constructor(private router: Router, private operationsService: OperationsService) { }

  onSubmit(operationModel: Operation) {
    this.operationModel = operationModel;
    this.operationsService.addOperation(this.operationModel)
      .subscribe(
        data => console.log('Success', data),
        error => console.error('Error', error)
      );
  }

  ngOnInit() {
  }

}
