import { Component, OnInit } from '@angular/core';
import { BUTTON } from '../mock-buttons';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  buttons = BUTTON;
}
