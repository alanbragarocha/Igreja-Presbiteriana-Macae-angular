import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escalas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escalas.component.html',
  styleUrl: './escalas.component.scss',
})
export class EscalasComponent {
  // Dados das escalas podem ser preenchidos dinamicamente
  // através de um serviço no futuro
}
