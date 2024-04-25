import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HeaderGridModel } from "../header.model";
import { HEADER_GRID_DATA_MODEL } from "../header.mock";

@Injectable({ providedIn: 'root' })
export class HeaderApiService {

    getHeaders(): Observable<HeaderGridModel> {
        return of(HEADER_GRID_DATA_MODEL);
    }

}