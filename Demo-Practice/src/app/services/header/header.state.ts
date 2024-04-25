import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HeaderGridModel } from "../header.model";

@Injectable({ providedIn: 'root' })
export class HeaderStateService {

    private headerGridModel$  = new BehaviorSubject<HeaderGridModel | null>(null)

    setHeaders(headers: HeaderGridModel | null) {
        this.headerGridModel$.next(headers);
    }
    getHeaders$() {
        return this.headerGridModel$.asObservable();
    }
}