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

  result:Array<Object>=[];
  result2:any;

  rowClick(tempName: string) {

    // FIND CLICKED ROW IN MOUNTAINS ARRAY BY NAME
    var temp = this.mountainsData
        .pipe(
            map(x =>
            {
                console.log(x);
                return x.find(y => y.name == tempName)
            })
        );

    var cm: MountainDto;
    cm = {
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

    temp.subscribe(result => {
        this.result2 = result
        cm.name = this.result2.name;
        cm.height = this.result2.height,
        cm.difficulty = this.result2.difficulty,
        cm.country = this.result2.country,
        cm.range = this.result2.range,
        cm.park = this.result2.park,
        cm.shelter = this.result2.shelter,
        cm.shelterDistance = this.result2.shelterDistance,
        cm.foodQuality = this.result2.foodQuality,
        cm.alwaysSnow = this.result2.alwaysSnow,
        cm.liftAvailable = this.result2.liftAvailable,
        cm.trails = this.result2.trails,
        cm.isDeleted = this.result2.isDeleted
    });

    this.elementChosen.emit(cm);
  }
}
