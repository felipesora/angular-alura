import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento {

  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }
}
