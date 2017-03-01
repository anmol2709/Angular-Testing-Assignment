import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Task} from '../task'
import {AppService} from "../app.service";
//import error = webdriver.error;
//import error = webdriver.error;

@Component({
  moduleId: module.id,
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {
  task:Task=new Task()
  task1:Task[]=[{
      date: '12/12/12',
      title: 'Anmol',
      description: 'hi all',
      priority: 'high',
      _id: '123'
  }]
  index:string;
  constructor(private router: Router,private route: ActivatedRoute, private service:AppService) {}
  ngOnInit() {



    this.route.params.subscribe((data: any) => {
      this.index = data.i;
      if (this.index) {
        // this.task = this.service.tasks[this.index];

        this.pageRefresh()


        // this.router.navigate(['show']);
        // alert(" TASK EDITED");
      }


    });
  }
  //Using Observable GET HTTP
//         this.service.getData().subscribe((data1 :any)=>{
//           alert(JSON.stringify(data1))
//         },
//           (e:any)=> {
//           alert(e);
//
//         },
//           ()=>
//           {
//           alert("completed")
//           }
//         );

  // this.service.postData().subscribe((data1 :any)=>{
  //     alert(JSON.stringify(data1))
  //   },
  //   (e:any)=> {
  //     alert(e);
  //
  //   },
  //   ()=>
  //   {
  //     alert("completed")
  //   }
  // );


  // Using Promise
  // this.service.getData().then((data1 :any)=>{
  //   alert(JSON.stringify(data1))},error=>{
  //     alert(error)
  //   }
  //   }
  //
  // });
  //
  submit() {

    if(this.index) {
      this.service.update(this.task).subscribe((data1: any) => {
             alert("Updated")
          },
          (e: any) => {
            alert(e);

          });
      // this.service.pageRefresh()

    }else{
      this.service.add(this.task).subscribe((data1: any) => {
            // alert(JSON.stringify(data1))

          },
          (e: any) => {
            alert(e);

          },
          () => {
            // alert("completed")
          }
      );
      // this.service.pageRefresh()

      // alert("NEW TASK ADDED");
    }
    this.router.navigate(['show']);
  }


  goHome(){
    this.router.navigate(['home']);
  }


  pageRefresh(){

    this.service.getData().subscribe((data1: any) => {
          this.task1 = data1;
          // this.task = this.task1[this.index]
          this.task = this.task1.filter(x=>x._id==this.index)[0]
          // alert(JSON.stringify(data1))
        },
        (e: any) => {
          alert(e);

        }
    );
  }

}
