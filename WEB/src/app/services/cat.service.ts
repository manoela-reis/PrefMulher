import { Injectable } from '@angular/core';
import { OficiosService } from './oficios.service';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private oficiosService: OficiosService) {}

  getAllRequiredInformation() {
    return {
      data: this.getCatInformation()
    };
  }

  getCatInformation() {
    return [{
      oficio: '200/2018',
      cadastrada: {
        nome: 'Maria da Penha',
        cpf: '111.111.111-11',
        rg: '12.123.123-12',
        cargoDesejado: 'Auxiliar Administrativo '
      },
      empresa: 'Fictícia 1',
      vaga: {
        cargo: 'Auxiliar Administrativo ',
        descricaodavaga: 'Conhecer a rotina administrativa de um escritório de contabilidade, com conhecimento em organização e arquivamento de documentos, atendimento telefônico, recebimento de correspondências e atendimento ao público.',
        horariodetrabalho: 'Segunda a Sexta, das 09h as 18h',
        localdetrabalho: 'Rua dos Pinheiros, 324 - Pinheiros - SP',
        salario: '1.500,00',
        beneficios: 'Convênio médico e odontológico, VT, VR, PL'
      },
      status: 'Em processo'
    }, {
      oficio: '602/2018',
      cadastrada: {
        nome: 'Ciclana de tal',
        cpf: '333.333.333-33',
        rg: '23.234.234-23',
        cargoDesejado: 'Auxiliar de Escritório'
      },
      empresa: 'Fictícia 2',
      vaga: {
        cargo: 'Auxiliar de Escritório ',
        descricaodavaga: 'Conhecer a rotina administrativa de um consultório dentário, com conhecimento em organização e arquivamento de documentos, atendimento telefônico, recebimento de correspondências e atendimento ao público, gerencia de agenda',
        horariodetrabalho: 'Segunda a Sabado, das 08h as 13h ou das 13h as 19h',
        localdetrabalho: 'Alameda Pamplona, 110 - Bela Vista - SP',
        salario: '1.250,00',
        beneficios: 'Convênio Odontológico, VT, VR'
      },
      status: 'Aprovada'
    }];
  }

}
