import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MountainDto, MountainsComponent } from '../mountains.component';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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

    mountainDetailsForm: FormGroup;
    progressBarValue: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForms();
  }

  btnClick(): void {
    if (this.editModeOn) {
        this.editMountain.emit();
    } else  {
        this.addMountain.emit();
    }
  }

  createForms() {
    this.mountainDetailsForm = this.fb.group({

        name: ["", Validators.compose([
            Validators.required,
            Validators.pattern(/^[\s\p{L}]+$/u)
            ])],
        height: ["", Validators.compose([
            Validators.required,
            Validators.min(1),
            Validators.max(8849)
            ])],
        difficulty: ["", Validators.required],
        country: ["", Validators.compose([
            Validators.required,
            Validators.pattern(/^[\s\p{L}]+$/u)
            ])],
        range: ["", Validators.compose([
            Validators.required,
            Validators.pattern(/^[\s\p{L}]+$/u)
            ])],
        park: ["", Validators.compose([
            Validators.required,
            Validators.pattern(/^[\s\p{L}]+$/u)
            ])],
        shelter: ["", Validators.compose([
            Validators.required,
            Validators.pattern(/^[\s\p{L}]+$/u)
            ])],
        shelterDistance: ["", Validators.compose([
            Validators.required,
            Validators.max(100)
            ])],
        foodQuality: ["", Validators.required],
    });
  }

  validation_messages = {
    'name': [
        { type: 'required', message: 'Name is required' },
        { type: 'pattern', message: 'These characters are not allowed' },
    ],
    'height': [
        { type: 'required', message: 'Height is required' },
        { type: 'min', message: 'You know it\'s not possible' },
        { type: 'max', message: 'There is no such high mountain' }
    ],
    'difficulty': [
        { type: 'required', message: 'Difficulty is required' }
    ],
    'country': [
        { type: 'required', message: 'Country is required' },
        { type: 'pattern', message: 'These characters are not allowed' }
    ],
    'range': [
        { type: 'required', message: 'Range is required' },
        { type: 'pattern', message: 'These characters are not allowed' }
    ],
    'park': [
        { type: 'required', message: 'Park is required' },
        { type: 'pattern', message: 'These characters are not allowed' }
    ],
    'shelter': [
        { type: 'required', message: 'Mountain Shelter is required' },
        { type: 'pattern', message: 'These characters are not allowed' }
    ],
    'shelterDistance': [
        { type: 'required', message: 'ShelterDistance is required' },
        { type: 'max', message: 'Really that far?' }
    ],
    'foodQuality': [
        { type: 'required', message: 'FoodQuality is required' }
    ],
  };

  updateProgressBar() {
    console.log("PB update");
    this.calculateProgress();
  }

  calculateProgress() {
    let x = 0;
    if (this.currentMountain.name != "") x++;
    if (this.currentMountain.height != undefined) x++;
    if (this.currentMountain.difficulty != "") x++;
    if (this.currentMountain.country != "") x++;
    if (this.currentMountain.range != "") x++;
    if (this.currentMountain.park != "") x++;
    if (this.currentMountain.shelter != "") x++;
    if (this.currentMountain.shelterDistance != undefined) x++;
    if (this.currentMountain.foodQuality != "") x++;
    this.progressBarValue = x / 9 * 100;
  }

}
