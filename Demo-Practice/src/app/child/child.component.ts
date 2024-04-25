import { Component, Input } from '@angular/core';
import { Task, TaskStatus } from '../services/header.model';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() statusHeader!: string;
  @Input() tasks!: Task[]; // Use Task interface
  taskStatus!: TaskStatus;
  @Input() statusColor!: string;
  @Input() headerColor!: string;
  @Input()
  taskStatusId!: number;
  // Getter to filter tasks based on status

  drop(event: CdkDragDrop<Task[]>, id: number) {}

  deleteTask(_t7: Task) {
    throw new Error('Method not implemented.');
  }
}
