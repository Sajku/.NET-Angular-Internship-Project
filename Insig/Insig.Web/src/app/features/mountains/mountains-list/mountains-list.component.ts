import {AfterViewInit, Component, ViewChild, Output, EventEmitter, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable} from 'rxjs';
import { MountainDto, MountainsComponent } from '../mountains.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mountains-list',
  templateUrl: './mountains-list.component.html',
  styleUrls: ['./mountains-list.component.scss']
})
export class MountainsListComponent implements AfterViewInit {
    @Output() elementChosen: EventEmitter<MountainDto> = new EventEmitter();
    @Output() changeStatus: EventEmitter<{x: number, y: boolean}> = new EventEmitter();
    @Input() mountainsData: Observable<MountainDto[]>;

  displayedColumns: string[] = ['name', 'height', 'country', 'range', 'difficulty', 'distance', 'isDeleted', 'edit'];
  dataSource = new MatTableDataSource<MountainDto>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.refresh();
  }

  refresh() {
    console.log("REFRESH!!!!!!!!");

    this.mountainsData.subscribe(items => {
        this.dataSource.data = items;
        this.dataSource.paginator = this.paginator;
    })
  }

  rowClick(name: string, height: number, difficulty: string, country: string,
    range: string, park: string, shelter: string, shelterDistance: number,
    foodQuality: string, alwaysSnow: boolean, liftAvailable: boolean,
    trails: number, isDeleted: boolean) {

    this.elementChosen.emit( {name, height, difficulty, country, range,
    park, shelter, shelterDistance, foodQuality, alwaysSnow,
    liftAvailable, trails, isDeleted} as MountainDto);
  }

  rowStatusClick(tempId: number, tempStatus: boolean) {
    this.changeStatus.emit({x: tempId, y: !tempStatus})
  }
}
