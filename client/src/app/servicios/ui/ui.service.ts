import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {NavigationStart, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private subjetEnable = new Subject<any>();
  private subjetUser = new Subject<any>();
  private navigationChange = false;
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.navigationChange) {
          this.navigationChange = false;
        } else {
          this.subjetEnable.next();
        }
      }
    });
  }
  setEnable(enable: boolean, navigationChange = false){
    this.navigationChange = navigationChange;
    this.subjetEnable.next(enable);
  }
  getEnable(): Observable<any> {
    return this.subjetEnable.asObservable();
  }
  getUser(): Observable<any> {
    return this.subjetUser.asObservable();
  }
  setUser(user: any) {
    this.subjetUser.next(user);
  }
}
