/* @refresh reload */
import { render } from 'solid-js/web'

//import './index.css'
//import App from './App'
import { Clock } from './Clock';
import { Todo } from './Todo';

import { EtchASketch } from './EtchASketch';
import  Gantt  from "../gantt/src/index.js";


const clock = document.getElementById('clock')
const todo = document.getElementById('todo')
const sketch = document.getElementById('sketch')

render(() => <Clock />, clock!)
render(() => <Todo />, todo!)
render(() => <EtchASketch />, sketch!)

console.log("solid+++++++")
/*
                var tasks = [
                        {
                                start: '2018-10-01',
                                end: '2018-10-08',
                                name: 'Redesign website',
                                id: "Task 0",
                                progress: 20
                        },
                        {
                                start: '2018-10-03',
                                end: '2018-10-06',
                                name: 'Write new content',
                                id: "Task 1",
                                progress: 5,
                                dependencies: 'Task 0'
                        },
                        {
                                start: '2018-10-04',
                                end: '2018-10-08',
                                name: 'Apply new styles',
                                id: "Task 2",
                                progress: 10,
                                dependencies: 'Task 1'
                        },
                        {
                                start: '2018-10-08',
                                end: '2018-10-09',
                                name: 'Review',
                                id: "Task 3",
                                progress: 5,
                                dependencies: 'Task 2'
                        },
                        {
                                start: '2018-10-08',
                                end: '2018-10-10',
                                name: 'Deploy',
                                id: "Task 4",
                                progress: 0,
                                dependencies: 'Task 2'
                        },
                        {
                                start: '2018-10-11',
                                end: '2018-10-11',
                                name: 'Go Live!',
                                id: "Task 5",
                                progress: 0,
                                dependencies: 'Task 4',
                                custom_class: 'bar-milestone'
                        },
                        {
                                start: '2014-01-05',
                                end: '2019-10-12',
                                name: 'Long term task',
                                id: "Task 6",
                                progress: 0
                        }
                ]


                var gantt_chart = new Gantt("#gantt", tasks, {
                        on_click: task => {
                                console.log(task);
                        },
                        on_date_change: (task, start, end) => {
                                console.log(task, start, end);
                        },
                        on_progress_change: (task, progress) => {
                                console.log(task, progress);
                        },
                        on_view_change: (mode) => {
                                console.log(mode);
                        },
                        view_mode: 'Month',
                        language: 'en'
                });
                console.log(gantt_chart);
*/

function date_str (id) {

 var y = id.getFullYear().toString();
 var m = (id.getMonth()+1).toString().padStart(2, '0');
 var d = id.getDate().toString().padStart(2, '0');

 var fed = y + '-' + m + '-' + d;
 return fed;
}

function addday_str( day, a ) {
 const d2 = new Date(day.getTime())
 d2.setDate( d2.getDate() + a );
 return date_str(d2)
}

function addday( day, a ) {
 day.setDate( day.getDate() + a );
}


let today = new Date();

console.log(today);
console.log(date_str(today));
console.log(addday_str(today, 1));
console.log(addday_str(today, -1));
console.log(addday_str(today, 20));

var tasks = [
  {
    id: 'Task 1',
    name: 'TEST JOBS',
    start: addday_str(today,0),
    end:   addday_str(today,7),
    progress: 20,
    //dependencies: 'Task 2, Task 3',
    //custom_class: 'bar-milestone' // optional
  },
  {
    id: 'Task 2',
    name: 'Redesign website',
    start: addday_str(today,7),
    end:   addday_str(today,17),
    progress: 20,
    //dependencies: 'Task 2, Task 3',
    //custom_class: 'bar-milestone' // optional
  },
  {
    id: 'Task 4',
    name: 'website see',
    start: addday_str(today,13),
    end:   addday_str(today,19),
    progress: 20,
    //dependencies: 'Task 2, Task 3',
    //custom_class: 'bar-milestone' // optional
  },
  {
    id: 'Task 5',
    name: 'website see',
    start: addday_str(today,1),
    end:   addday_str(today,30),
    progress: 20,
    //dependencies: 'Task 2, Task 3',
    //custom_class: 'bar-milestone' // optional
  },
  {
    id: 'Task 6',
    name: 'website see',
    start: addday_str(today,0),
    end:   addday_str(today,2),
    progress: 20,
    //dependencies: 'Task 2, Task 3',
    //custom_class: 'bar-milestone' // optional
  },
  {
    id: 'Task 7',
    name: 'website see',
    start: addday_str(today,20),
    end:   addday_str(today,22),
    progress: 20,
    //dependencies: 'Task 2, Task 3',
    //custom_class: 'bar-milestone' // optional
  },
  {
    id: 'Task 8',
    name: 'website see',
    start: addday_str(today,5),
    end:   addday_str(today,35),
    progress: 20,
    //dependencies: 'Task 2, Task 3',
    //custom_class: 'bar-milestone' // optional
  },
  {
    id: 'Task 9',
    name: 'website see',
    start: addday_str(today,6),
    end:   addday_str(today,30),
    progress: 20,
    //dependencies: 'Task 2, Task 3',
    //custom_class: 'bar-milestone' // optional
  },
  {
    id: 'Task 10',
    name: 'website see',
    start: addday_str(today,7),
    end:   addday_str(today,35),
    progress: 20,
    //dependencies: 'Task 2, Task 3',
    //custom_class: 'bar-milestone' // optional
  },
  {
    id: 'Task 11',
    name: 'website see',
    start: addday_str(today,8),
    end:   addday_str(today,35),
    progress: 20,
    //dependencies: 'Task 2, Task 3',
    //custom_class: 'bar-milestone' // optional
  },
];
var gantt = new Gantt("#gantt", tasks,
{
    header_height: 50,
    column_width: 30,
    step: 24,
    view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
    bar_height: 30,
    bar_corner_radius: 8,
    arrow_curve: 5,
    padding: 13,
    view_mode: 'Day',
    //view_mode: 'Week',
    date_format: 'YYYY-MM-DD',
    //language: 'en', // or 'es', 'it', 'ru', 'ptBr', 'fr', 'tr', 'zh', 'de', 'hu'
    language: 'jp', // or 'es', 'it', 'ru', 'ptBr', 'fr', 'tr', 'zh', 'de', 'hu'
    custom_popup_html: null
}
);

