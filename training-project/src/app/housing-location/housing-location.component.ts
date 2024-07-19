import { Component, Input } from '@angular/core';
import { HousingLocationModel } from '../housing-location.model';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocationModel;
}
