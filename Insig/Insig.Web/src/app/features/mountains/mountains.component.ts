import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiMountainService } from '@app/core/services/api-mountain.service';
import { switchMapTo } from 'rxjs/operators';

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
    currentMountain: MountainDto;

    constructor(private _mountainService: ApiMountainService) {
        this.currentMountain = {
            name: "",
            height: 0,
            difficulty: "",
            country: "",
            range: "",
            park: "",
            shelter: "",
            shelterDistance: 0,
            foodQuality: "",
            alwaysSnow: false,
            liftAvailable: false,
            trails: 0,
            isDeleted: false
        } as MountainDto;
    }

    ngOnInit(): void {
        this.getMountains();
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
        console.log(this.currentMountain);
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

    addMountain(mountain: MountainDto): void {
        this.mountains = this._mountainService.addMountainData(mountain)
            .pipe(
                switchMapTo(this._mountainService.getMountainData())
            );
    }
}
