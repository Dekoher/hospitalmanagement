import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    // this.returnPromise().then(
    //   () => console.log('Finished'),
    //   () => console.log('Error')
    // );
    this.returnPromise().then(
      message => console.log('Finished!', message)
    ).catch(
      error => console.log('Failed', error)
    );
  }

  ngOnInit() {
  }

  returnPromise(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let counter = 0;
      let interval = setInterval(() => {
      // setInterval(() => {
        counter += 1;
        console.log(counter);
        if (counter === 3) {
          resolve(true);
          // reject('Fail!!! Reject of promise');
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
