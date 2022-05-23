import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalService } from '../../service/modal.service';
import { IModalDialog } from './dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: IModalDialog,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {}

  handleDialogSubmit() {
    this.modalService.isAsyncOperationRunning$.next(true);
    setTimeout(() => {
      this.dialogData.callbackMethod();
      this.modalService.isAsyncOperationRunning$.next(false);
    }, 500);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
