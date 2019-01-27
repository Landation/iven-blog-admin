import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '代办',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克买咖啡',
          priority:1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
          completed :true
        },
        {
          id: 2,
          desc: '任务二：去星巴克买PPT咖啡',
          priority:2,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },

      ]
    },
    {
      id: 1,
      name: '代办',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克买咖啡',
          priority:1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),

        },
        {
          id: 2,
          desc: '任务二：去星巴克买PPT咖啡',
          priority:3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },

      ]
    }



  ]
  constructor() { }

  ngOnInit() {

  }

}
