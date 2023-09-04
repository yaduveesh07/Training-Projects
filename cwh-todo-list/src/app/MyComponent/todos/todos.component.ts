import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '././Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
// deleteTodo($event: Event) {
// throw new Error('Method not implemented.');

// }
  todos: Todo[] = [
    { sno: 1, active: false, desc: 'test', title: 'test'},
    { sno: 1, active: false, desc: 'test', title: 'test'},
    { sno: 1, active: false, desc: 'test', title: 'test'},
    { sno: 1, active: false, desc: 'test', title: 'test'},
    { sno: 1, active: false, desc: 'test', title: 'test'},
    { sno: 1, active: false, desc: 'test', title: 'test'},
    { sno: 1, active: false, desc: 'test', title: 'test'},
    { sno: 1, active: false, desc: 'test', title: 'test'},
    
  ];


  @Output() todoadd:EventEmitter<Todo>=new EventEmitter();
  localItem: string | null;
  constructor() {
    this.localItem =localStorage.getItem("todos")
    if(this.localItem==null){
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
   }
  
  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index =this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  
  onEdit() {
    console.log("Edit has been triggered")
    
  }

  onSave() {
    this.todos.push({sno: 2, active: false, desc: 'test2', title: 'test02' })
    console.log("save has been triggered")
  }

  onDelete() {
    console.log("delete has been triggered")
    this.todos.pop();
    
  }

  onAdd() {
    console.log("add todo has been triggered")
    
  }

  title:string | undefined;
  desc:string | undefined;

  
  onSubmit(){
  const todo:Todo={
    sno: 0,
    title:this.title,
    desc:this.desc,
    active: false 
  }
  this.todoadd.emit(todo)
  }
  
}
