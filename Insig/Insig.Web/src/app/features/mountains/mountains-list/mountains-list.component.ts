import {AfterViewInit, Component, ViewChild, Output, EventEmitter, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { MountainDto } from '../mountains.component';

@Component({
  selector: 'app-mountains-list',
  templateUrl: './mountains-list.component.html',
  styleUrls: ['./mountains-list.component.scss']
})
export class MountainsListComponent implements AfterViewInit {
    @Output() elementChosen = new EventEmitter();
    @Input() mountainsData: Observable<MountainDto[]>;
    @Input() currentMountain: MountainDto;
    //clickedRows = new Set<MountainDto>();

  displayedColumns: string[] = ['name', 'height', 'country', 'range', 'difficulty', 'distance'];
  dataSource = new MatTableDataSource<MountainDto>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.getMountainsData().subscribe(items => {
        this.dataSource.data = items;
        this.dataSource.paginator = this.paginator;
    })
  }

  rowClick(): void {
    this.elementChosen.emit();
  }

  getMountainsData(): Observable<MountainDto[]> {
    return this.mountainsData;
  }
}

