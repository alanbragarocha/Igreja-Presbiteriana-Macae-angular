import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

interface Contato {
  endereco: string;
  telefone: string;
  email: string;
}

interface RedesSociais {
  facebook: string;
  instagram: string;
  youtube: string;
  whatsapp: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  contato: Contato = {
    endereco: 'Rua XXXX, nº XXX - Bairro, Macaé - RJ',
    telefone: '(22) XXXX-XXXX',
    email: 'contato@ipmacae.org.br',
  };

  redesSociais: RedesSociais = {
    facebook: 'https://www.facebook.com/igrejapresbmacae',
    instagram: 'https://www.instagram.com/igrejapresbmacae',
    youtube: 'https://www.youtube.com/channel/igrejapresbmacae',
    whatsapp: 'https://wa.me/5522999999999',
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Poderia carregar dados do serviço se necessário
  }
}
