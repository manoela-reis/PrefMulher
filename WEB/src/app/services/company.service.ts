import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  getAllRequiredInformation() {
    return {
      data: this.getCompanies()
    };
  }

  getCompanies() {
    return [
      {
        empresa: 'Fictícia 1',
        vaga: [{
          cargo: 'Auxiliar adminitrativo ',
          descricaodavaga: 'Conhecer a rotina administrativa de um escritorio de contabilidade, com conhecimento em organizacao e  arquivamento de documentos, atedentimento telefonico, recebimento de correspondecias e atendimento ao publico',
          horariodetrabalho: 'segunda a sexta, das 09h as 18h',
          localdetrabalho: 'rua dos pinheiro, 324 - pinheiros - sp',
          salario: '1.500,00',
          beneficios: 'convenio medico e odontologico, vt, vr, pl'
        }]
      },
      {
        empresa: 'Fictícia 2',
        vaga: [{
          cargo: 'Auxiliar de escritório ',
          descricaodavaga: 'Conhecer a rotina administrativa de um consultorio dentario, com conhecimento em organizacao e  arquivamento de documentos, atedentimento telefonico, recebimento de correspondecias e atendimento ao publico, gerencia de agenda',
          horariodetrabalho: 'segunda a sabado, das 08h as 13h ou das 13h as 19h',
          localdetrabalho: 'alameda pamplona, 110 - bela vista - sp',
          salario: '1.250,00',
          beneficios: 'convenio odontologico, vt, vr'
        }]
      },
    ];
  }

}
