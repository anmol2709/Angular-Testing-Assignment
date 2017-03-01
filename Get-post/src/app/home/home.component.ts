import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  moduleId: module.id,

  selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private router: Router) {}

    createTask(){

        this.router.navigate(['create'])
    }

    showTask(){

        this.router.navigate(['show'])
    }

}
