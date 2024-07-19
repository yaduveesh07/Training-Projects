import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  sections = [
    { id: 'section1', name: 'Section 1' },
    { id: 'section2', name: 'Section 2' },
    { id: 'section3', name: 'Section 3' },
  ];
}
