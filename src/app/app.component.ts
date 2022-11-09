import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Contador App';
  contador:number=0;
  base:number=5;

  contar(){
    this.contador=this.contador+this.base
  }
  restar(){
    if(this.contador<=0){
      this.contador=this.contador
    }
    else{
      this.contador=this.contador-this.base
    }
  }
}
