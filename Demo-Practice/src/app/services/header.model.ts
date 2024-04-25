export enum TaskStatus {
  Todos = 1,
  InProgress = 2,
  OnHold = 3,
  Completed = 4,
  Done = 5,
}

export interface Task {
  id: number;
  title: string;
  description: string;
  statusId?: number;
}
export interface TaskGrid {
  todos: Task[];
}

const taskStatus = ['Todo', 'In Progress', 'On Hold', 'Completed'];

export const ITEMS: Task[] = [];
for (let i = 1; i <= 20; i++) {
  ITEMS.push({
    id: i,
    title: `Title ${i}`,
    description: `description ${i}`,
    statusId: (i % taskStatus.length) + 1,
  });
}

// export const TaskMock: taskGrid {
//   tasks: ITEMS;
// }

// export const todos: Task[] = [
//   {
//     id: 1,
//     title: 'Launch new template',
//     description: 'Integer posuere erat a ante venenatis dapibus posuere.',
//     status: TaskStatus.todos,
//   },
//   {
//     id: 2,
//     title: 'Book a Ticket',
//     description: 'Blandit tempus porttitor aasfs.',
//     status: TaskStatus.todos,
//   },
//   {
//     id: 3,
//     title: 'Task review',
//     description:
//       'Lorem Ipsum, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
//     status: TaskStatus.todos,
//   },
// ];

// export const inprogress: Task[] = [
//   {
//     id: 201,
//     title: 'Website Design',
//     description: 'Integer posuere erat a ante venenatis dapibus posuere.',
//     status: TaskStatus.inprogress,
//   },
//   {
//     id: 202,
//     title: 'Angular 5 material',
//     description:
//       'Lorem Ipsum, dapibus ac facilisis in, egestas eget quam. Integer posuere erat aassg.',
//     status: TaskStatus.inprogress,
//   },
// ];

// export const completed: Task[] = [
//   {
//     id: 301,
//     title: 'Completed Task 1',
//     description: 'Description for Completed Task 1',
//     status: TaskStatus.completed,
//   },
// ];

// export const onhold: Task[] = [
//   {
//     id: 401,
//     title: 'On Hold Task 1',
//     description: 'Description for On Hold Task 1',
//     status: TaskStatus.onhold,
//   },
// ];
