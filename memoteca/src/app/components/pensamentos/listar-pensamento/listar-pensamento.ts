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
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas impedit possimus, ratione nulla officia illum fugiat dignissimos blanditiis reiciendis quibusdam officiis, a quisquam, nihil quia? Illum praesentium debitis tenetur est? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident unde reiciendis, nisi repellendus ullam fuga error blanditiis facilis porro soluta similique. Dolore veritatis eius exercitationem tempora illum molestiae tempore minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum incidunt quidem iusto vero similique fuga minus eum alias culpa, sapiente suscipit magnam corporis optio omnis provident, deserunt ipsa eaque.',
      autoria: 'Felipe',
      modelo: 'modelo2'
    },
  ];
}
