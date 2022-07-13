import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MountainsRoutingModule } from './mountains-routing.module';

import { MountainsComponent } from './mountains.component';
import { MountainFormComponent } from './mountain-form/mountain-form.component';

@NgModule({
    declarations: [
        MountainsComponent,
        MountainFormComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        MatSelectModule,
        MatCheckboxModule,
        MatSliderModule,
        MountainsRoutingModule
    ]
})
export class MountainsModule { }
