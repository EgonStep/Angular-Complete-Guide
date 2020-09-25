import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidator } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(null, [Validators.required], this.asyncInvalidName),
      email: new FormControl(null, [Validators.required, Validators.email, CustomValidator.invalidProjectEmail]),
      status: new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  invalidName(control: FormControl): {[s:string]:boolean} {
    if (control.value === 'Test') {
      return {'nameIsInvalid': true};
    }
    return null;
  }

  asyncInvalidName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'asyncNameIsInvalid': true});
        } else {
          resolve(null);
        }
      },1500);
    });

    return promise;
  }
}
