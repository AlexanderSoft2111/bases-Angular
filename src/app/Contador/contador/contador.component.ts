import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>

        <h2>base: {{base}}</h2>

        <button (click)="acumulador(base)">+{{base}}</button>

        <strong>{{numero}}</strong>

        <button (click)="acumulador(-base)">-{{base}}</button>
    `
})

export class ContadorComponent{

    title = 'App Contador';
    numero: number = 0;
    base  : number = 5;
    
    acumulador(valor: number){
      this.numero += valor;
    }

}