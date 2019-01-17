import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ServicosProvider {
  private apiREST = 'https://guialocalize.com/api/test/services';

  constructor(public http: Http) {
    console.log('Hello ServicosProvider Provider');
  }

  listaServicos() {
    return this.http.get(this.apiREST)
      .map((data) => {
        return data.json();
      });
  }

}
