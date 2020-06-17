import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increase-decrease',
  templateUrl: './increase-decrease.component.html',
  styles: []
})
export class IncreaseDecreaseComponent implements OnInit {
  @Input() percentage: number = 50;
  @Input() text: string = 'TExt';
  @Output() outputProgressValue: EventEmitter<number> = new EventEmitter();
  @ViewChild('inputIncreaser', {static: true}) inputIncreaser: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onChamge(newValue: number) {
    if (newValue >= 100) {
      this.percentage = 100;
    } else if (newValue <= 0) {
      this.percentage = 0;
    } else {
      this.percentage = newValue;
    }
    this.inputIncreaser.nativeElement.value = this.percentage;
    this.outputProgressValue.emit(this.percentage);
  }

  changeProgressValue(value: number) {
    if (this.percentage >= 100 && value > 0) {
      this.percentage = 100;
      return;
    }
    if (this.percentage <= 0 && value < 0) {
      this.percentage = 0;
      return;
    }
    this.percentage += value;
    this.outputProgressValue.emit(this.percentage);
    this.inputIncreaser.nativeElement.focus();
  }

}
