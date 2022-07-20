import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { AfterViewInit, Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { MountainDto } from '../mountains.component';

interface EmpFilter {
    name:string;
    options:string[];
    defaultValue:string;
}

@Component({
  selector: 'app-mountains-list',
  templateUrl: './mountains-list.component.html',
  styleUrls: ['./mountains-list.component.scss']
})
export class MountainsListComponent implements AfterViewInit {
    @Output() elementChosen: EventEmitter<MountainDto> = new EventEmitter();
    @Output() changeStatus: EventEmitter<{x: number, y: boolean}> = new EventEmitter();
    @Output() changePaginatorSettings: EventEmitter<{pageIndex: number, pageSize: number, length: number}> = new EventEmitter();
    @Output() getAllData: EventEmitter<void> = new EventEmitter();
    @Input() mountainsData: MountainDto[];

  displayedColumns: string[] = ['name', 'height', 'country', 'range', 'difficulty', 'distance', 'isDeleted', 'edit'];
  dataSource = new MatTableDataSource<MountainDto>();

  filterBtnOff: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {}

  refresh() {
    this.dataSource.data = this.mountainsData;
    this.dataSource.paginator = this.paginator;
  }

  rowClick(id: number, name: string, height: number, difficulty: string, country: string,
    range: string, park: string, shelter: string, shelterDistance: number,
    foodQuality: string, alwaysSnow: boolean, liftAvailable: boolean,
    trails: number, isDeleted: boolean) {

    this.elementChosen.emit( {id, name, height, difficulty, country, range,
    park, shelter, shelterDistance, foodQuality, alwaysSnow,
    liftAvailable, trails, isDeleted} as MountainDto);
  }

  rowStatusClick(tempId: number, tempStatus: boolean) {
    this.changeStatus.emit({x: tempId, y: !tempStatus})
  }

  getPaginatorData(event: PageEvent) {
    this.changePaginatorSettings.emit({pageIndex: event.pageIndex, pageSize: event.pageSize, length: event.length});
  }

  loadAllData() {
    this.filterBtnOff = true;
    this.getAllData.emit();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
