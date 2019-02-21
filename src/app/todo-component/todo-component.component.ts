import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.scss']
})
export class TodoComponentComponent {
  @Input() headline;
  @Output() newTodo = new EventEmitter();

  form = {todo: '', done: true};

  constructor(public todoService: TodoService) { }

  handleSubmit($event) {
    $event.preventDefault();
    this.todoService.addTodo(this.form);
    this.newTodo.emit(this.form);
  }
}
