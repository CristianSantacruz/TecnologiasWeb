import {Component, OnInit} from '@angular/core';
import {Response, Http} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// CTRL A --> CTRL + ALT + L --> Para Identar Código
export class AppComponent implements OnInit {
  title:string ="Bienvenido a Ingresar Tiendas";
  tamanio="50px";
  tiendas = [];
  disableButtons = {
    NuevaTiendaFormularioButtom:false
  };

  constructor(private _http: Http, private _masterURL:MasterURLService) {
  }

  ngOnInit() {
    this._http.get(this._masterURL.url+"Tienda")
      .subscribe(
        (res:Response)=>{
          this.tiendas = res.json();
        },
        (err)=>{
          console.log(err);
        }
      )
  }

  nuevaTienda:any={};

  crearTienda(formulario:NgForm) {
    console.log(formulario);
    this.disableButtons.NuevaTiendaFormularioButtom = true;
    this._http.post(this._masterURL.url+"Tienda", {
      nombre:formulario.value.nombre
    }).subscribe(
      (res)=>{
        console.log("No hubo Errores");
        console.log(res);
        this.nuevaTienda = {};
        this.disableButtons.NuevaTiendaFormularioButtom = false;
      },
      (err)=>{
        this.disableButtons.NuevaTiendaFormularioButtom = false;
        console.log("Ocurrio un err or",err);
      },
      ()=>{
        console.log("Termino la función vamos a las casas")
      }
    );

  }

  borrarTienda(id:number){
    this._http.delete(this._masterURL.url+"Tienda/"+id)
      .subscribe(
        (res)=>{
          let tiendaBorrada = res.json();
          this.tiendas = this.tiendas.filter(value=>tiendaBorrada.id!=value.id);
        },
        (err)=>{
          console.log(err);
        }
      )
  }

  actualizarTienda(tienda:any){
    let parametos = {
      nombre:tienda.nombre
    };
    this._http.put(this._masterURL.url+"Tienda/"+tienda.id,parametos)
      .subscribe(
        (res:Response)=>{
          console.log("Respuesta:",res.json());
        },
        (err)=>{
          console.log("Error:",err);
        }
      )
  }
}
