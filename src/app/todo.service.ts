import {HttpHeaders} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  todoList = [];

  constructor(private http: HttpClient) {this.load();}

  load() {
    const token = sessionStorage.getItem('jsessionid');

    const tokenJSON = JSON.parse(token);

    if (token != null || tokenJSON.expires_in < new Date().getTime()) {

      const getTaskUrl = 'https://angular-backend-demo.herokuapp.com/getTasks';

      const getTaskHeaders: HttpHeaders = new HttpHeaders()
        .append('Authorization', 'Bearer' + tokenJSON.access_token);

      this.http.post(getTaskUrl, {
        withCredentials: true
      }, {
          headers: getTaskHeaders
        }).subscribe((res) => {
          console.log(res);
          for (let i = 0; ; i++) {
            if (res[i] == null) {
              break;
            }
            console.log('adding task' + res[i]);

            this.todoList.unshift(res[i].task);
          }
        });

    }
  }

  addItem(task: string, token: string) {
    this.todoList.unshift(task);

    const insertTaskUrl = 'https://angular-backend-demo.herokuapp.com/insertTask';

    const insertTaskParams: HttpParams = new HttpParams()
      .append('task', task);

    const insertTaskHeaders: HttpHeaders = new HttpHeaders()
      .append('Authorization', 'Bearer' + token);

    this.http.post(insertTaskUrl, {
      withCredentials: true
    }, {
        headers: insertTaskHeaders,
        params: insertTaskParams
      }).subscribe((res) => {
        console.log(res);
      });
  }

}
