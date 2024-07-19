import { Injectable } from '@angular/core';
import { HousingLocationModel } from './housing-location.model';
import { housingLocationList } from './housing-location.mock';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}

  getAllHousingLocations(): HousingLocationModel[] {
    return housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocationModel | undefined {
    return housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }
}
