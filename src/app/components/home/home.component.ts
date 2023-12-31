import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nomeProduto: string = `Curso de Angular`;
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 3;
  precoProduto: number = 2.59;
  promocao: boolean = true;
  foto:string = 'assets/img/crud.png'

  constructor()
  {
    console.log(`Nome do Produto`, this.nomeProduto);
    console.log('Anuncio', this.anuncio);
    console.log(`ID`, this.idProduto);
    console.log(`Preço`, this.precoProduto);
    console.log(`Promoção`, this.promocao);


    var idade = 10;
    console.log('minha idade é: ', idade);
  }
  ngOnInit(): void {}
}
