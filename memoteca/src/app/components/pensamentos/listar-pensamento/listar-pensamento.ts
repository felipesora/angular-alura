import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Pensamento } from "../pensamento/pensamento";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, Pensamento, NgFor, NgIf],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento {

  listaPensamentos = [
    {
      conteudo: 'I love Angular',
      autoria: 'Nay',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Felipe',
      modelo: 'modelo1'
    }
  ];
}
