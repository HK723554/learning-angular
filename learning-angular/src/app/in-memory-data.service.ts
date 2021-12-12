import { Injectable } from '@angular/core';
import {Content} from "@angular/compiler/src/render3/r3_ast";

interface InMemoryDbServic {
}

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbServic{

  constructor() {

  }

  createDb() {
    const content : Content[] = [];
    return {content};
  };


}


