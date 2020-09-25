import { FormControl} from '@angular/forms';

export class CustomValidator {
  static invalidProjectEmail(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'test@test.com') {
      return {'emailIsInvalid': true};
    }
    return null;
  }
}
