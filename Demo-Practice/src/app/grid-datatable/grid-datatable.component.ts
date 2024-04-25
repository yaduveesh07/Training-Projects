import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Task, TaskStatus, TaskGrid } from '../services/header.model';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../services/header.service';
import { Observable } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import moment from 'moment-timezone';
import ApexCharts from 'apexcharts';
import {
  IgxLegendComponent,
  IgxCategoryChartComponent,
} from 'igniteui-angular-charts';
import { Chart, ChartOptions } from 'chart.js';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

interface KanbanColumn {
  id: string;
  title: string;
  tasks: string[];
}

enum BrowserOptions {
  Chrome = 1,
  Firefox = 2,
  Safari = 3,
  Edge = 4,
  Opera = 5,
}

interface ChartSeries {
  name: string;
  data: number[];
  visible: boolean;
}

// export enum TimeZone {
//   DELHI_KOLKATA_MUMBAI_CHENNAI = 'Delhi, Kolkata, Mumbai, Chennai',
//   // Add more time zones as needed
// }

@Component({
  selector: 'app-grid-datatable',
  templateUrl: './grid-datatable.component.html',
  styleUrl: './grid-datatable.component.css',
})
export class GridDatatableComponent implements OnInit {
  public chartOptions: any = {
    series: [
      {
        name: 'Sales',
        data: [0, 0, 0, 0, 0, 0, 8, 0],
      },
    ],
    chart: {
      height: 350,
      type: 'line',
    },
    xaxis: {
      categories: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
    },
  };

  constructor() {}

  ngOnInit(): void {}

  // view: 'week' | 'month' = 'week';

  // toggleView(view: 'week' | 'month') {
  //   this.view = view;
  // }

  // percentageForm!: FormGroup;

  // constructor(private formBuilder: FormBuilder) {}

  // ngOnInit(): void {
  //   this.percentageForm = this.formBuilder.group({
  //     currency: ['INR', Validators.required], // Defaulting to INR, change as needed
  //   });
  // }

  // submitPercentage() {
  //   if (this.percentageForm.valid) {
  //     const currencyValue = this.percentageForm.value.currency;
  //     console.log('Selected currency:', currencyValue);
  //     // Here you can perform any further actions with the selected currency
  //   }
  // }

  // implements OnInit {
  //   taskStatusEnum = TaskStatus;
  //   taskGrid$!: Observable<TaskGrid>;
  //   taskColumns: {
  //     statusHeader: string;
  //     tasks: Task[];
  //     statusColorClass: string;
  //     headerColorClass: string;
  //   }[] = [];

  //   constructor(private taskService: TaskService) {}

  //   ngOnInit(): void {
  //     this.taskGrid$ = this.taskService.getTaskGrid();
  //     this.taskGrid$.subscribe((taskGrid) => {
  //       if (taskGrid) {
  //         const allTasks = Object.values(taskGrid).flatMap((tasks) => tasks);
  //         this.createTaskColumns(allTasks);
  //       }
  //     });
  //   }

  //   createTaskColumns(tasks: Task[]): void {
  //     this.taskColumns = Object.values(TaskStatus)
  //       .filter((status) => !isNaN(Number(status)))
  //       .map((status) => ({
  //         statusHeader: this.getStatusHeader(status as TaskStatus),
  //         tasks: tasks.filter((task) => task.statusId === status),
  //         statusColorClass: this.getStatusColorClass(status as TaskStatus),
  //         headerColorClass: this.getHeaderColorClass(status as TaskStatus),
  //       }));
  //   }

  //   getStatusHeader(status: TaskStatus): string {
  //     return TaskStatus[status]
  //       .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before uppercase letters that are not at the beginning of the word
  //       .replace(/\b\w/g, (firstChar) => firstChar.toUpperCase()); // Capitalize the first letter of each word
  //   }

  //   private getStatusColorClass(status: TaskStatus): string {
  //     switch (status) {
  //       case TaskStatus.Todos:
  //         return 'todos-task-status';
  //       case TaskStatus.InProgress:
  //         return 'in-progress-color-class';
  //       case TaskStatus.OnHold:
  //         return 'on-hold-color-class';
  //       case TaskStatus.Completed:
  //         return 'completed-color-class';
  //       case TaskStatus.Done:
  //         return 'done-color-class';
  //       default:
  //         return '';
  //     }
  //   }

  //   private getHeaderColorClass(status: TaskStatus): string {
  //     switch (status) {
  //       case TaskStatus.Todos:
  //         return 'todo-header-color-class';
  //       case TaskStatus.InProgress:
  //         return 'in-progress-header-color-class';
  //       case TaskStatus.OnHold:
  //         return 'on-hold-header-color-class';
  //       case TaskStatus.Completed:
  //         return 'completed-header-color-class';
  //       case TaskStatus.Done:
  //         return 'done-header-color-class';
  //       default:
  //         return '';
  //     }
  //   }
}
