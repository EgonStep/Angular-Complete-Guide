import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private userSerice: UserService) {
  }

  ngOnInit() {
    // Observables are constructs to which you subscribe to be informed about the changes in data.
    // Because observables are that stream of data and whenever a new data piece is emitted, our subscrption
    // will know about it
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate() {
    this.userSerice.activatedEmitter.next(true);
  }
}
