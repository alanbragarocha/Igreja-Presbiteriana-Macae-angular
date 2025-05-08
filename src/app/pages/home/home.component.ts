import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService, DadosBancarios, DadosPix, Evento } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  dadosBancarios: DadosBancarios;
  dadosPixId: DadosPix;
  eventos: Evento[];

  constructor(private dataService: DataService) {
    this.dadosBancarios = this.dataService.dadosBancarios;
    this.dadosPixId = this.dataService.dadosPix;
    this.eventos = this.dataService.eventos;
  }

  ngOnInit(): void {
    // Inicialização adicional se necessário
  }

  copiarChavePix(): void {
    navigator.clipboard
      .writeText(this.dadosPixId.chave)
      .then(() => {
        alert('Chave PIX copiada com sucesso!');
      })
      .catch((err) => {
        console.error('Erro ao copiar: ', err);
        alert('Não foi possível copiar a chave PIX. Por favor, copie manualmente.');
      });
  }
}
