import { Injectable } from "@angular/core";
import { root } from "rxjs/internal/util/root";

@Injectable({providedIn: 'root'})
export class UserService {
  user = {
    name: 'Tom'
  };
}
