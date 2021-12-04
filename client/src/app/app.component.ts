import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {LoginState} from "./shared/states";
import {login} from "./shared/actions";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  header = 'Header';
  text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"

  activeItem: MenuItem | any ;
  items: MenuItem[] | any ;
  state:any | undefined;
  logged:boolean = true;


  constructor(public  router:Router, public readonly store:Store) {

  }


  ngOnInit() {
    this.store.select((s:any)=> s).subscribe(s=>this.state = s);
    console.log(this.state.logged);
    this.logged = this.state.logged;
      this.items = [
          {label: 'Home', icon: 'pi pi-fw pi-home',routerLink:'/home'},
          {label: 'Teachers', icon: 'pi pi-fw pi-building',routerLink:'/teachers'},
          {label: 'Students', icon: 'pi pi-fw pi-users',routerLink:'/students'},
      ];
      this.store.dispatch(login())
      this.activeItem = this.items[0];
  }
  login()
  {
    this.store.select((s:any)=> s).subscribe(s=>this.state = s);
    console.log("logged:",this.state.login.logged);
    this.logged = this.state.login.logged;
  }
}
