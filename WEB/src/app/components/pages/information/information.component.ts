import { Component, OnInit, Input } from '@angular/core';
import { OficiosService } from 'src/app/services/oficios.service';
import { CompanyService } from 'src/app/services/company.service';
import { WomanService } from 'src/app/services/woman.service';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: [ './information.component.scss' ]
})
export class InformationComponent implements OnInit {

  type;
  response;
  infoByServices = {
    organization: {
      tableHeader: [ 'Ofícios', 'Número', 'Orgão Expeditor', 'Nome', 'RG', 'CPF', 'Foi ao CAT?' ],
      response: this.oficiosService
    },
    company: {
      tableHeader: [ 'Empresas', 'Nome', 'Vagas' ],
      response: this.companyService
    },
    cat: {
      tableHeader: [ 'CAT', 'Ofício', 'Cadastrada', 'Vaga', 'Empresa', 'Status' ],
      response: this.catService
    }
  };
  vacancyVisualization;

  constructor(private oficiosService: OficiosService, private companyService: CompanyService, private womanService: WomanService, private catService: CatService) {}

  ngOnInit() {
    this.type = localStorage.getItem('userType');
    const response = this.infoByServices[this.type].response.getAllRequiredInformation();
    this.response = response.data;
    console.log('response', this.response);
  }

  getVacancyDetails(vacancyList) {
    console.log(vacancyList);
    this.vacancyVisualization = vacancyList;
  }

}
