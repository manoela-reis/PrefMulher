import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WomanService {

  getWoman() {
    return [{
      nome: 'Maria da Penha',
      cpf: '111.111.111-11',
      rg: '12.123.123-12',
      cargoDesejado: 'Auxiliar'
    }, {
      nome: 'Fulana de tal',
      cpf: '222.222.222-22',
      rg: '22.222.222-22',
      cargoDesejado: 'Desenvolvedora'
    }, {
      nome: 'Ciclana de tal',
      cpf: '333.333.333-33',
      rg: '23.234.234-23',
      cargoDesejado: 'Auxiliar de Escritório'
    }];
  }

}
