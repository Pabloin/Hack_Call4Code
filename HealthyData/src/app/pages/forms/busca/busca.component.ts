import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

  searchingBasico: boolean;
  searchingAvanzado: boolean;
  textoBasico: string;
  placeHolder: string;

  constructor() { }

  ngOnInit() {
    this.doClear();
  }

  doSearchBasico() {
    if (this.textoBasico === "") {
      this.placeHolder = "ingrese un texto"
    } else {
      this.searchingBasico = !this.searchingBasico;
    }
  }

  doSearchAvanzado() {
    this.searchingAvanzado = !this.searchingAvanzado;
  }

  doClear() {
    this.searchingBasico = false;
    this.searchingAvanzado = false;
    this.textoBasico = "";
    this.placeHolder = "";
  }
}
