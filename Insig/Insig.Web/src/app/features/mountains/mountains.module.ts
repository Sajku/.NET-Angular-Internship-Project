import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table'
import { MountainsRoutingModule } from './mountains-routing.module';

import { MountainsComponent } from './mountains.component';
import { MountainFormComponent } from './mountain-form/mountain-form.component';
import { MountainsListComponent } from './mountains-list/mountains-list.component';

@NgModule({
    declarations: [
        MountainsComponent,
        MountainFormComponent,
        MountainsListComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        MatSelectModule,
        MatCheckboxModule,
        MatSliderModule,
        MatProgressBarModule,
        MatTableModule,
        MountainsRoutingModule
    ]
})
export class MountainsModule { }
