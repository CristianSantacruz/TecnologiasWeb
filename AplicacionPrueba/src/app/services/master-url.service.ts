import { Injectable } from '@angular/core';

@Injectable()
export class MasterURLService {

  private url:string;
  constructor() {
    this.url = "http://localhost:1337";
  }


}
