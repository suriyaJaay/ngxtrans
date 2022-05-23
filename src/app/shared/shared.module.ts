import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ModalComponent } from './components/modal/modal.component';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [SharedComponent, ModalComponent],
  imports: [CommonModule, SharedRoutingModule, MaterialModule],
  exports: [ModalComponent],
})
export class SharedModule {}
