import { AfterViewInit, Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MountainDto } from '../mountains.component';

@Component({
  selector: 'app-mountains-list',
  templateUrl: './mountains-list.component.html',
  styleUrls: ['./mountains-list.component.scss']
})
export class MountainsListComponent implements AfterViewInit {
    @Output() elementChosen: EventEmitter<MountainDto> = new EventEmitter();
    @Output() changeStatus: EventEmitter<{x: number, y: boolean}> = new EventEmitter();
    @Output() changePaginatorSettings: EventEmitter<{pageIndex: number, pageSize: number, length: number}> = new EventEmitter();
    @Input() mountainsData: MountainDto[];

  displayedColumns: string[] = ['name', 'height', 'country', 'range', 'difficulty', 'distance', 'isDeleted', 'edit'];
  dataSource = new MatTableDataSource<MountainDto>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.getPaginatorData({pageIndex: 0, pageSize: 5, length: 10} as PageEvent);
    this.refresh();
  }

  refresh() {
    console.log("REFRESH!");
    this.dataSource.data = this.mountainsData;
    this.dataSource.paginator = this.paginator;
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

  getPaginatorData(event: PageEvent) {
    console.log(event);
    this.changePaginatorSettings.emit({pageIndex: event.pageIndex, pageSize: event.pageSize, length: event.length});
  }
}
