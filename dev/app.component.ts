import { Component } from '@angular/core';
import { Testing } from './prueba.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 playground :)</h1>
    
        <testing></testing>
       
    `,
    directives: [Testing]
})
export class AppComponent {

}