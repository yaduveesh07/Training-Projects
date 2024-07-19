import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-detail',
  templateUrl: './name-detail.component.html',
  styleUrl: './name-detail.component.css',
})
export class NameDetailComponent {
  @Input() progress: number = 0; // Progress input (0 to 100)
  @Input() indeterminate: boolean = false; // Indeterminate state
}
