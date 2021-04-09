import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es : <strong>{{base}}</strong></h3>
        <p>
        Valor del contador: <span> {{contador}}</span>
        </p>

        <button (click)="acumular(base)">Incrementar contador {{base}}</button>
        <button (click)="acumular(base * -1)">Restar contador {{base}}</button>
    `
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    contador: number = 0;
    base : number = 5;
  
    acumular(valor:number){
      this.contador += valor;
    }
}