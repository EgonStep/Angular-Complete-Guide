import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // Interval creates an Observable that emits sequential numbers every specified interval of time.
    // this.firstObservableSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // Creating a custom observable
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        // Completing the observable
        if (count === 5) {
          observer.complete(); // Once is complete, there's no new values, so the observable is done.
        }

        // Simulating an error that cancel the Observable (destroy it)
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }

        count++;
      }, 1000);
    });

    // Changes the data after pipe. With pipe we can combine multiples rxjs operators to transform the data before use
    // https://www.learnrxjs.io/
    customIntervalObservable.pipe(map((data: number) => {
      return 'Round: ' + (data + 1);
    }));

    // this.firstObservableSubscription = customIntervalObservable.subscribe(data => {
    this.firstObservableSubscription = customIntervalObservable.pipe(
      filter(data => {
      return (data > 0);
    }), map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!');
    });
  }

  ngOnDestroy(): void {
    // When we leave the home component, we destroy the observable to prevent new ones
    // *But for Observables provide by Angular. Angular will take care about unsubscribing.
    this.firstObservableSubscription.unsubscribe();
  }
}
