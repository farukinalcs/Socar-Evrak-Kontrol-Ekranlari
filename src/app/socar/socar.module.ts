import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide:DatePipe,
    }
  ]
})
export class SocarModule { }
