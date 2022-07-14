import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mountain-form',
  templateUrl: './mountain-form.component.html',
  styleUrls: ['./mountain-form.component.scss']
})
export class MountainFormComponent implements OnInit {
    @Input() editModeOn: boolean = false;
    @Output() turnOffEditMode = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(): void {
    this.turnOffEditMode.emit();
    if (this.editModeOn) {
        console.log("EDIT MODE!!!");
    } else  {
        console.log("ADD MODE ACTIVE.");
    }
  }



}
