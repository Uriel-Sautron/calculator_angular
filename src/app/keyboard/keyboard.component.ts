import { Component, OnInit } from '@angular/core';
import { BUTTON } from '../mock-buttons';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent implements OnInit {
  constructor() {}

  inputKey: string = '';
  currentNumber: number = 0;
  operator: string = '';

  ngOnInit(): void {}

  add(number1: number, number2: number): void {
    this.currentNumber = number1 + number2;
  }

  sub(number1: number, number2: number): void {
    this.currentNumber = number1 - number2;
  }

  multi(number1: number, number2: number): void {
    this.currentNumber = number1 * number2;
  }

  div(number1: number, number2: number): void {
    this.currentNumber = number1 / number2;
  }

  calcul(operator: string) {
    switch (operator) {
      case '+':
        this.add(this.currentNumber, Number(this.inputKey));
        break;
      case '-':
        this.sub(this.currentNumber, Number(this.inputKey));
        break;
      case 'X':
        this.multi(this.currentNumber, Number(this.inputKey));
        break;
      case '÷':
        this.div(this.currentNumber, Number(this.inputKey));
        break;
      default:
        this.currentNumber += Number(this.inputKey);
        break;
    }

    this.inputKey = '';
  }

  onClick(label: string): void {
    switch (label) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        this.inputKey += label;
        break;
      case '+':
      case '-':
      case '÷':
      case 'X':
        this.calcul(this.operator);
        this.operator = label;
        break;
      case '=':
        this.calcul(this.operator);
        break;

      case '%':
        if (this.operator == 'X') {
          this.multi(this.currentNumber, Number(this.inputKey) / 100);
        } else {
          this.currentNumber = Number(this.inputKey) / 100;
        }
        this.inputKey = '';
        break;
      case 'AC':
        this.currentNumber = 0;
        this.inputKey = '';
        this.operator = '';
        break;
    }
    console.log('inputKey:', this.inputKey);
  }

  buttons = BUTTON;
}
