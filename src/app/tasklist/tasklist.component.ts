import {TodoService} from '../todo.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {


  constructor(public todo: TodoService) {}


}
