import { TodoService } from '../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {

  constructor(private todo: TodoService) { }

  item: string;

  add() {
    this.todo.addItem(this.item, JSON.parse(sessionStorage.getItem('jsessionid')).access_token);
    console.log(this.item);
    this.item = '';
  }

}
