import { Component } from '@angular/core';

@Component({
	selector: 'testing',
	template: `
<p [class.red]="inputElement.value === 'red'" >If you say "red", I blush</p>
<input type="text" #inputElement (keyup)="red">

<p [style.color]="color" >Color me!</p>
<input type="text" [(ngModel)]="color" placeholder="Type a color">
`,
	styleUrls: ['./assets/scss/prueba.component.css']
})

export class Testing {
	public color = ""
}
