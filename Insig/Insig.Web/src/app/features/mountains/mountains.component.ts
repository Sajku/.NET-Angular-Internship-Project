import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mountains',
    templateUrl: './mountains.component.html',
    styleUrls: ['./mountains.component.scss'],
})
export class MountainsComponent implements OnInit {
    title = "Moutains Collection";

    constructor() { }

    ngOnInit(): void { }
}
