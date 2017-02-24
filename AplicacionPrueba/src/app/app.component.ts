import {Component, OnInit} from '@angular/core';
import {Response, Http} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// CTRL A --> CTRL + ALT + L --> Para Identar Código
export class AppComponent implements OnInit {
  title:string ="Hola amigos";
  nombre:string="";
  apellido:string="";
  tamanio="50px"

  constructor(private _http: Http, private _masterURL:MasterURLService) {
    this.nombre="Cristian";
    this.apellido="Santacruz";
    console.log("Inicio el Constructor")
  }

  ngOnInit() {
    console.log("OnInit");
    this.nombre="David";
    this.apellido="Guarquila"

  }

  nombreCompleto():string{
    return `${this.nombre} - ${this.apellido}`;
  }

  hizoClic() {
    console.log("Hizo clic")
  }

  hizoMouseEnter() {
    console.log("Hizo mouse enter")
  }

  nuevaTienda:any={};

crearTienda(formulario){
  console.log(formulario);
  this._http
    .post("http://localhost:1337/Tienda", formulario.valores)
    .subscribe(
      res=>console.log('Respuesta: ',res),
      err=>console.log('Error: ',err),
      ()=>{
        console.log("Se completo la accion");
        this._http.post(this._masterURL.url,{}).subscribe(respuesta=>console.log("respuesta ", respuesta));
      }
    );
}
//  title = 'app works!';
}
