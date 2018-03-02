import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
@Component({
  selector: 'app-button-render',
  templateUrl: './button-render.component.html',
  styleUrls: ['./button-render.component.scss'],
  template: `
    <button (click)="example()">Add to Cart</button>
  `,
})

export class ButtonRenderComponent implements OnInit {

  public renderValue;

  @Input() value;

  constructor() {  }
  

  ngOnInit() {
    this.renderValue = this.value;
  }5

  example() {
    alert(this.renderValue);
    
  }


}