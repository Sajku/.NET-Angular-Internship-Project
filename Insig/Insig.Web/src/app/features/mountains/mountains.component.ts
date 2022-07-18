import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ApiMountainService } from '@app/core/services/api-mountain.service';
import { switchMapTo } from 'rxjs/operators';
import { MountainsListComponent } from './mountains-list/mountains-list.component';

export interface MountainDto {
    id?: number;
    name?: string;
    height?: number;
    difficulty?: string;
    country?: string;
    range?: string;
    park?: string;
    shelter?: string;
    shelterDistance?: number;
    foodQuality?: string;
    alwaysSnow?: boolean;
    liftAvailable?: boolean;
    trails?: number;
    isDeleted?: boolean;
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
    subscription!: Subscription;

    mountains!: Observable<MountainDto[]>;
    currentMountain: MountainDto;


    @ViewChild(MountainsListComponent, { static: false })
    listComponent: MountainsListComponent;

    constructor(private _mountainService: ApiMountainService) {
        this.currentMountain = {
            id: 0,
            name: "",
            height: undefined,
            difficulty: "",
            country: "",
            range: "",
            park: "",
            shelter: "",
            shelterDistance: undefined,
            foodQuality: "",
            alwaysSnow: false,
            liftAvailable: false,
            trails: undefined,
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
    }

    listElementChosen(clickedRow: MountainDto): void {
        this.turnOnEditMode();
        this.currentMountain = clickedRow;
    }

    editStatus(eventData: {x: number, y: boolean}) {
        this.editMountainStatus(eventData.x, eventData.y);
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

    addMountain(): void {
        this.mountains = this._mountainService.addMountainData(this.currentMountain)
            .pipe(
                switchMapTo(this._mountainService.getMountainData())
            );

        this.subscription = this.mountains
        .subscribe();

        this.getMountains();
        setTimeout(() => {
            this.listComponent.refresh();
          }, 500)

    }

    editMountain(): void {
        this.mountains = this._mountainService.editMountainData(this.currentMountain)
            .pipe(
                switchMapTo(this._mountainService.getMountainData())
            );

        this.subscription = this.mountains
        .subscribe();

        this.getMountains();
        setTimeout(() => {
            this.listComponent.refresh();
          }, 500)
    }

    editMountainStatus(x: number, y: boolean): void {
        this.mountains = this._mountainService.editMountainStatusData(x, y)
            .pipe(
                switchMapTo(this._mountainService.getMountainData())
            );

        this.subscription = this.mountains
        .subscribe();

        this.getMountains();
        setTimeout(() => {
            this.listComponent.refresh();
          }, 500)
    }

    changeEditMountainMode(): void {
        this.turnOffEditMode();
        this.toggleAddFormVisibility();
        this.editMountain();
    }
}
