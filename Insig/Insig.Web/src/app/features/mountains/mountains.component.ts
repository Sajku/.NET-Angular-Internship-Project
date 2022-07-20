import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiMountainService } from '@app/core/services/api-mountain.service';
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

    mountains!: MountainDto[];
    currentMountain: MountainDto;

    lastPageIndex: number = 0;
    lastPageSize: number = 5;
    lastLength: number = 10;

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
        this.getAllMountainsIds();
        this.updatePaginatorData({ pageIndex: 0, pageSize: 5, length: 10});
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

    changeEditMountainMode(): void {
        this.turnOffEditMode();
        this.toggleAddFormVisibility();
        this.editMountain();
    }

    // ==============================================================
    // DATABASE ACCESS

    getMountains(): void {
        this._mountainService.getMountainData()
            .subscribe(data => {
                this.mountains = data;
            });
    }

    getAllMountainsIds(): void {
        this._mountainService.getMountainDataById(0)
            .subscribe(data => {
                this.mountains = data;
            });
    }

    addMountain(): void {
        this._mountainService.addMountainData(this.currentMountain)
            .subscribe(data => {
                this.mountains.push(data);
                this.listComponent.refresh();
            });
    }

    editMountain(): void {
        this._mountainService.editMountainData(this.currentMountain)
            .subscribe(() => {
                this.updatePaginatorData({pageIndex: this.lastPageIndex,
                    pageSize: this.lastPageSize,
                    length: this.lastLength});
                this.listComponent.refresh();
            });
    }

    editMountainStatus(eventData: {x: number, y: boolean}): void {
        this._mountainService.editMountainStatusData(eventData.x, eventData.y)
            .subscribe(() => this.listComponent.refresh());
    }

    updatePaginatorData(eventData: {pageIndex: number, pageSize: number, length: number}): void {
        var start: number = eventData.pageIndex * eventData.pageSize + 1;
        var end: number = (eventData.pageIndex + 1) * eventData.pageSize;

        this.lastPageIndex = eventData.pageIndex;
        this.lastPageSize = eventData.pageSize;
        this.lastLength = eventData.length;

        if (end > eventData.length) {
            end = eventData.length;
        }

        var fewData: MountainDto[] = [];
        this._mountainService.getFewMountainData(start, end)
            .subscribe(data => {
                fewData = data;
                fewData.forEach(element => {
                    var index = this.mountains.findIndex(item => item.id === element.id);
                    this.mountains[index] = element;
                });
                setTimeout(() => {
                    this.listComponent.refresh();
                },100)
            })
    }
}
