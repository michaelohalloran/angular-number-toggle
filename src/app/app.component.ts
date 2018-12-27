import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  odds: number[] = this.numbers.filter(num => num%2 !== 0);
  evens: number[] = this.numbers.filter(num => num%2 === 0);
  onlyOdd = false;
  text: string = 'Only show odd numbers';

  toggleNumType() {
    this.onlyOdd = !this.onlyOdd;
    this.text = this.onlyOdd ? 'Only show even numbers' : 'Only show odd numbers';

  }
}
