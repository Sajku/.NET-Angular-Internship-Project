import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';

import { MountainsComponent } from './mountains.component';

@NgModule({
    declarations: [
        MountainsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class MountainsModule { }
