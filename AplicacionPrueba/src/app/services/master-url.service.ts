import { Injectable } from '@angular/core';

@Injectable()
export class MasterURLService {

  private _url:string;
  constructor() {
    this.url = "http://localhost:1337";
  }

  get url():string{
    return this.url;
  }

  set url(nuevoURL:string){
    this.url=nuevoURL;
  }
}
