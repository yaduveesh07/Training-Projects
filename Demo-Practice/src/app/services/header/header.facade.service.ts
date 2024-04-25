import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HeaderGridModel } from "../header.model";
import { HeaderApiService } from "./header.api.service";
import { HeaderStateService } from "./header.state";

@Injectable({ providedIn: 'root' })
export class HeaderFacadeService {

    constructor(private headerApiService: HeaderApiService,private headerStateService: HeaderStateService) {}

    getHeaders$(): Observable<HeaderGridModel | null> {
        return this.headerStateService.getHeaders$();
    }
    loadHeaders() {
        this.headerApiService.getHeaders()
            .subscribe((headerGridModel: HeaderGridModel | null) => {
                this.headerStateService.setHeaders(headerGridModel);
            });
    }
}