import { Injectable } from '@angular/core';
import { MountainDto } from '@app/features/mountains/mountains.component';
import { Observable } from 'rxjs';

import { ApiClientService } from './api-client.service';

@Injectable({
    providedIn: 'root'
})
export class ApiMountainService {
    constructor(private _apiClientService: ApiClientService) { }

    // Example safe API Call with Segments and Query in URI
    // this.apiClientService.get(`${appConfig.ApiUrl}/values/{id}/samples/{name}`,
    //      {queryParams: { id: 1, name: "test" }, segmentParams: { q1: "ABC!", q2: "z x" }});
    // URI result: "https://localhost:5001/values/1/samples/test?q1=ABC%21&q2=z+x"

    getMountainData(): Observable<MountainDto[]> {
        return this._apiClientService.get(`${appConfig.apiUrl}/values/mountains`);
    }

    getMountainDataById(id: number): Observable<MountainDto[]> {
        return this._apiClientService.get(`${appConfig.apiUrl}/values/mountains/${id}`);
    }

    getFewMountainData(start: number, end: number): Observable<MountainDto[]> {
        return this._apiClientService.get(`${appConfig.apiUrl}/values/mountains/${start}-${end}`,);
    }

    addMountainData(mountain: MountainDto): Observable<MountainDto> {
        return this._apiClientService.post(`${appConfig.apiUrl}/values/mountains`, { data: mountain });
    }

    editMountainData(mountain: MountainDto): Observable<MountainDto> {
        return this._apiClientService.put(`${appConfig.apiUrl}/values/mountains`, { data: mountain });
    }

    editMountainStatusData(id: number,status: boolean): Observable<MountainDto> {
        return this._apiClientService.patch(`${appConfig.apiUrl}/values/mountains`, { data: {id: id, isDeleted: status} });
    }
}
