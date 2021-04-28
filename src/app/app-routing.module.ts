import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {UserFormComponent} from './user-form/user-form.component';


const routes: Routes = [
  // {path: '', component: HelloWorldComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'user-form', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
