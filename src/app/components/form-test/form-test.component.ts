import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IModalDialog } from 'src/app/shared/components/modal/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss'],
})
export class FormTestComponent implements OnInit {
  testForm!: FormGroup;
  submitted = false;
  public dialogSubmissionMessage: string = '';

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.testForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.testForm.invalid) {
      console.log('Form has invalid value format');
      // alert('Form has invalid value format');
      this.openDialogOne();
    }
    console.log('Form value', this.testForm.value.name);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.testForm.controls;
  }

  openDialogOne() {
    const dialogInterface: IModalDialog = {
      dialogHeader: 'Test',
      dialogContent: 'Invalid Entry',
      cancelButtonLabel: 'OK',
      /* confirmButtonLabel: 'Submit', */
      callbackMethod: () => {
        this.performDialogSubmitMethodOne();
        console.log('asdfasd');
      },
    };
    this.dialog.open(ModalComponent, {
      width: '300px',
      data: dialogInterface,
      disableClose: true,
    });

    
  }

  /**
   * This method invokes the second dialog
   */
  /* openDialogTwo() {
    const dialogInterface: IModalDialog = {
      dialogHeader: 'I am created by Reusable dialog',
      dialogContent: 'I am second dialog',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Submit',
      callbackMethod: () => {
        this.performDialogSubmitMethodTwo();
      },
    };
    this.dialog.open(ModalComponent, {
      width: '300px',
      data: dialogInterface,
      disableClose: true,
    });
  } */

  performDialogSubmitMethodOne() {
    this.dialogSubmissionMessage = 'The dialog submitted from the Dialog ONE';
  }

 /*  performDialogSubmitMethodTwo() {
    this.dialogSubmissionMessage = 'The dialog submitted from the Dialog TWO';
  } */
}
