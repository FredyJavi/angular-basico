import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listadoHeroes:string []=["Superman", "Batman","Chapulin"]
  heroeBorrado:string="";
  constructor() { }

  ngOnInit(): void {
  }
  borrando(){
    this.heroeBorrado=this.listadoHeroes.shift()|| '';
    
  }
}
