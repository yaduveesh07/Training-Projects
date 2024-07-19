import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private applicationReady$ = new BehaviorSubject<boolean>(false);

  // Returns an observable for applicationReady
  useApplicationReady$() {
    return this.applicationReady$.asObservable(); // Corrected to call asObservable
  }

  // Method to update the applicationReady state
  setApplicationReady(isReady: boolean): void {
    this.applicationReady$.next(isReady);
  }
}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { ITEMS, Task, TaskStatus } from './header.model';
// import { HttpClient } from '@angular/common/http';

// export interface TaskGrid {
//   todos: Task[];
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class TaskService {
//   constructor(private http: HttpClient) {}
// }

// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Task } from './header.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class TaskService {
//   constructor() {}

//   // Simulated tasks data
//   private tasks: Task[] = [
//     {
//       id: 1,
//       title: 'Task 1',
//       description: 'Description for Task 1',
//       statusId: 1, // Assuming 1 is Todo status
//     },
//     {
//       id: 2,
//       title: 'Task 2',
//       description: 'Description for Task 2',
//       statusId: 2, // Assuming 2 is In Progress status
//     },
//     {
//       id: 3,
//       title: 'Task 3',
//       description: 'Description for Task 3',
//       statusId: 3, // Assuming 1 is Todo status
//     },
//     {
//       id: 4,
//       title: 'Task 4',
//       description: 'Description for Task 4',
//       statusId: 4, // Assuming 2 is In Progress status
//     },
//     {
//       id: 5,
//       title: 'Task 5',
//       description: 'Description for Task 5',
//       statusId: 1, // Assuming 1 is Todo status
//     },
//     {
//       id: 6,
//       title: 'Task 6',
//       description: 'Description for Task 6',
//       statusId: 2, // Assuming 2 is In Progress status
//     },
//     {
//       id: 7,
//       title: 'Task 7',
//       description: 'Description for Task 7',
//       statusId: 3, // Assuming 1 is Todo status
//     },
//     {
//       id: 8,
//       title: 'Task 8',
//       description: 'Description for Task 8',
//       statusId: 4, // Assuming 2 is In Progress status
//     },
//     // Add more tasks as needed
//   ];

//   // Method to get all tasks
//   getTasks(): Observable<Task[]> {
//     return of(this.tasks);
//   }
// }
