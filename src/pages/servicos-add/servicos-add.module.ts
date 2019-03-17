import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicosAddPage } from './servicos-add';

@NgModule({
  declarations: [
    ServicosAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicosAddPage),
  ],
})
export class ServicosAddPageModule {}
