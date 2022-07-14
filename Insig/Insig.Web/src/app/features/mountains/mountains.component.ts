import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiMountainService } from '@app/core/services/api-mountain.service';

export interface MountainDto {
    name: string;
    height: number;
    difficulty: string;
    country: string;
    range: string;
    park: string;
    shelter: string;
    shelterDistance: number;
    foodQuality: string;
    alwaysSnow: boolean;
    liftAvailable: boolean;
    trails: number;
    isDeleted: boolean;
}

@Component({
    selector: 'app-mountains',
    templateUrl: './mountains.component.html',
    styleUrls: ['./mountains.component.scss'],
})
export class MountainsComponent implements OnInit {
    title = "Mountains Collection";
    showForm: boolean = false;
    btnText: string = "Add a new mountain";
    btnIcon: string = "add";
    editModeOfTheFormOn: boolean = false;

    mountains!: Observable<MountainDto[]>;

    constructor(private _mountainService: ApiMountainService) { }

    ngOnInit(): void {
        this.mountains = this._mountainService.getMountainData();
    }

    toggleAddFormVisibility(): void {
        this.showForm = !this.showForm;
        if (this.showForm) {
            this.turnOffEditMode();
            this.btnText = "Cancel form"
            this.btnIcon = "close"
        } else {
            this.turnOffEditMode();
            this.btnText = "Add a new mountain"
            this.btnIcon = "add"
        }
    }

    turnOnEditMode(): void {
        this.showForm = true;
        this.btnText = "Cancel form"
        this.btnIcon = "close"
        this.editModeOfTheFormOn = true;
    }

    turnOffEditMode(): void {
        this.editModeOfTheFormOn = false;
        this.btnText = "Add a new mountain"
        this.btnIcon = "add"
    }

    getMountains(): void {
        this.mountains = this._mountainService.getMountainData();
    }

}
