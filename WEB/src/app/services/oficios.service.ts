import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OficiosService {
  constructor() {}

  getAllRequiredInformation() {
    return {
      data: this.getOficies()
    };
  }

  getOficies() {
    return [{
          numero: '200/2018',
          orgao: 'Ministério Público',
          mulher: {
            nome: 'Maria da Penha',
            cpf: '111.111.111-11',
            rg: '12.123.123-12'
          },
          cat: 'Sim'
        },
        {
          numero: '521/2018',
          orgao: 'Tribunal da Justiça',
          mulher: {
            nome: 'Fulana de tal',
            cpf: '222.222.222-22',
            rg: '22.222.222-22'
          },
          cat: 'Faltam 14 dias'
        },
        {
          numero: '602/2018',
          orgao: 'Defensoria Pública',
          mulher: {
            nome: 'Ciclana de tal',
            cpf: '333.333.333-33',
            rg: '23.234.234-23'
          },
          cat: 'Sim'
        },
        {
          numero: '285/2018',
          orgao: 'Tribunal da Justiça',
          mulher: {
            nome: 'Capitã Marvel',
            cpf: '444.444.444-44',
            rg: '34.345.345-34'
          },
          cat: 'Falta 1 dia'
        }
    ];
  }

}
