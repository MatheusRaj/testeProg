import { ServicosProvider } from '../../providers/servicos/servicos';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  servicos: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicosProvider: ServicosProvider) {

  }
    ionViewDidLoad() {
      this.listaServicos();
    }

    listaServicos() {
      this.servicosProvider.listaServicos()
        .subscribe(
          servicos => this.servicos = servicos);
    }
 }

