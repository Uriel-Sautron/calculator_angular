import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Button } from '../mock-buttons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input() button?: Button;
  @Input() onClick?: EventEmitter<void>;

  ngOnInit(): void {}
}
