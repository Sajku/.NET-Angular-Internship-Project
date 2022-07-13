import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MountainsComponent } from './mountains.component';

const routes: Routes = [
    {
        path: 'mountains',
        component: MountainsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MountainsRoutingModule { }
