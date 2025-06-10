import { Component } from '@angular/core';
import { CpfComponent } from "./cpf/cpf";

@Component({
  selector: 'app-root',
  imports: [CpfComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Validacao';
}
