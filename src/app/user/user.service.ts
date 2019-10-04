import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserService {
  private user = { name: "marvin" };

  public getUserName() {
    return this.user.name;
  }
  public userTest:Observable<any>;
  constructor() {}
}
