import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mountains',
    templateUrl: './mountains.component.html',
    styleUrls: ['./mountains.component.scss'],
})
export class MountainsComponent implements OnInit {
    title = "Moutains Collection";
    showAddForm: boolean = false;
    showEditForm: boolean = false;
    btnText: string = "Add a mountain";
    btnIcon: string = "add";

    constructor() { }

    ngOnInit(): void { }

    toggleAddFormVisibility(): void {
        this.showAddForm = !this.showAddForm;
        if (this.showAddForm) {
            this.btnText = "Cancel form"
            this.btnIcon = "close"
        } else {
            this.btnText = "Add a mountain"
            this.btnIcon = "add"
        }
    }

    makeEditFormVisible(): void {
        this.showEditForm = true;
    }
}
