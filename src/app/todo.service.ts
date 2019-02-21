import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  list = [];
  private source = new Subject<any[]>();
  public todos$ = this.source.asObservable();

  constructor() { }

  public addTodo(todo) {
    this.list = [...this.list, {...todo}];
    this.source.next(this.list);
  }
}
