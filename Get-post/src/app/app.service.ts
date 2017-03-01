import {Injectable} from '@angular/core'
import {Task} from "./task";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
@Injectable()
export class AppService {


  constructor(private http:Http){}
  tasks: Task[] = [];


  add(task: Task) {
    // this.tasks.push(task);

    let obj={
      date: task.date,
      title:task.title,
      description:task.description,
      priority:task.priority
    };

    let jsonHeaders= new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.post('http://localhost:9000/add',obj,{headers:jsonHeaders}).map((response:any)=> {
      return this.extractData(response)
    }).catch((e:any) => {
      alert("error");
      return Observable.throw<any>(new Error("error"));
    });

  }


  extractData(res:any){
    let body= res.json()
    return body;
  }

  update(task:Task){
    let obj={
      _id:task._id,
      date: task.date,
      title:task.title,
      description:task.description,
      priority:task.priority

    };

    let jsonHeaders= new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.post('http://localhost:9000/update',obj,{headers:jsonHeaders}).map((response:any)=> {
      return this.extractData(response)
    }).catch((e:any) => {
      alert("error");
      return Observable.throw<any>(new Error("error"));
    });

  }

  delete(_id: any) {

    let jsonHeaders= new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.get('http://localhost:9000/remove/'+_id,{headers:jsonHeaders}).map((response:any)=> {
      return this.extractData1 (response)
    });


  }

  taskArray: Task[] = [];

  deleteByIndex(index: number) {
    this.taskArray.splice(index, 1);
  }
  extractData1(res:any){
    let body= res.json();
    return body;

  }

// //Observable
//   getData():Observable<any> {
// return Observable.of<any>(this.tasks);
// //  return Observable.throw<any>(new Error("error"));
//
//  }
// //Using Promise
//
//  // getData() {
//  //
//  //    //return Promise.resolve<any>(this.tasks);
//  //    return Promise.reject<any>(new Error("err"));
//  //
//  //  }
//


  //HTTP  get CALL

  getData():Observable<any> {
    let jsonHeaders= new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.get('http://localhost:9000/get/all',{headers:jsonHeaders}).map((response:any)=> {
      return this.extractData2(response)
    });
  }
  extractData2(res:any){
    let body= res.json();
    return body;
  }


//HTTP POST CALL
//
//   postData():Observable<any> {
//
//     let obj={
//       date: "2017-02-02",
//       title:"anmol",
//       description:"sfsvs",
//       priority:"high"
//     };
//
//     let jsonHeaders= new Headers({
//       'Content-Type': 'application/json'
//     })
//     return this.http.post('http://localhost:9000/add',obj,{headers:jsonHeaders}).map((response:any)=> {
//       return this.extractData(response)
//     }).catch((e:any) => {
//       alert("error");
//       return Observable.throw<any>(new Error("error"));
//     });
//
//   }
//
//
//   extractData(res:any){
//     let body= res.json()
//     return body;
//   }
//


}
