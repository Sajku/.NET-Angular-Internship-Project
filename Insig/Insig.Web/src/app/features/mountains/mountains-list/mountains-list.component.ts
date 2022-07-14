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

  displayedColumns: string[] = ['Name', 'Height', 'Country', 'Range', 'Difficulty', 'Distance'];
  dataSource = new MatTableDataSource<MountainDto>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  rowClick(): void {
    this.elementChosen.emit();
  }
}

const ELEMENT_DATA: MountainDto[] = [
    {
        name: "Kasprowy Wierch",
        height: 1987,
        difficulty: "Medium",
        country: "Poland",
        range: "Tatra Mountains",
        park: "Tatra National Park",
        shelter: "Murowaniec",
        shelterDistance: 4.2,
        foodQuality: "Good",
        alwaysSnow: false,
        liftAvailable: true,
        trails: 4,
        isDeleted: false
    },
    {
        name: "Matterhorn",
        height: 4478,
        difficulty: "Extreme",
        country: "Italy",
        range: "Alps",
        park: "Glacier National Park",
        shelter: "Hörnli hut",
        shelterDistance: 1.5,
        foodQuality: "Medium",
        alwaysSnow: true,
        liftAvailable: false,
        trails: 2,
        isDeleted: true
    },
    {
        name: "Mount Everest",
        height: 8849,
        difficulty: "You Can Die!",
        country: "Nepal",
        range: "Himalayas",
        park: "Sagarmatha National Park",
        shelter: "Not Available",
        shelterDistance: 0,
        foodQuality: "",
        alwaysSnow: true,
        liftAvailable: false,
        trails: 3,
        isDeleted: false
    },
    {
        name: "Skrzyczne",
        height: 1257,
        difficulty: "Easy",
        country: "Poland",
        range: "Silesian Beskids",
        park: "Park Krajobrazowy Beskidu Śląskiego",
        shelter: "Schronisko PTTK Skrzyczne",
        shelterDistance: 0.1,
        foodQuality: "Awful",
        alwaysSnow: false,
        liftAvailable: true,
        trails: 3,
        isDeleted: true
    }
];
