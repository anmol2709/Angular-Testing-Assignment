import {Routes} from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {CreateComponent} from "./create/create.component";
import {ShowComponent} from "./show/show.component";

export const routes:Routes = [{
  path:'home',
  component: HomeComponent
},{
  path : 'create',
  component: CreateComponent

},{
  path : 'edit/:i',
  component: CreateComponent
},{
  path : 'show',
  component: ShowComponent

},{
  path : '',
  redirectTo: '/home',
  pathMatch: 'full'
}];
