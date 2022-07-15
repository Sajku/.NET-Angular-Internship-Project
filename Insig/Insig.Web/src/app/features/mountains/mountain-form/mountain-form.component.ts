import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MountainDto } from '../mountains.component';

@Component({
  selector: 'app-mountain-form',
  templateUrl: './mountain-form.component.html',
  styleUrls: ['./mountain-form.component.scss']
})
export class MountainFormComponent implements OnInit {
    @Input() editModeOn: boolean = false;
    @Output() editMountain = new EventEmitter();
    @Output() addMountain: EventEmitter<MountainDto> = new EventEmitter();
    @Input() currentMountain: MountainDto;
  constructor() { }

  ngOnInit(): void { }

  btnClick(): void {
    if (this.editModeOn) {
        this.editMountain.emit();
    } else  {
        this.addMountain.emit();
    }
  }
}
