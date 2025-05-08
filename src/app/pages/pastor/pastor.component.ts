import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Foto {
  src: string;
  alt: string;
  titulo: string;
}

@Component({
  selector: 'app-pastor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pastor.component.html',
  styleUrls: ['./pastor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PastorComponent implements OnInit {
  lightboxAtivo = false;
  fotoSelecionada: Foto | null = null;

  fotos: Foto[] = [
    {
      src: 'assets/imagens/familia-pastor/01.jpeg',
      alt: 'Martha Morett',
      titulo: '',
    },
    {
      src: 'assets/imagens/familia-pastor/02.jpeg',
      alt: 'Família do Pastor',
      titulo: '',
    },
    {
      src: 'assets/imagens/familia-pastor/03.jpeg',
      alt: 'Família do Pastor',
      titulo: '',
    },
    {
      src: 'assets/imagens/familia-pastor/4.jpeg',
      alt: 'Família do Pastor',
      titulo: '',
    },
    {
      src: 'assets/imagens/familia-pastor/05.jpeg',
      alt: 'Família do Pastor',
      titulo: '',
    },
    {
      src: 'assets/imagens/familia-pastor/07.jpeg',
      alt: 'Família do Pastor',
      titulo: 'Momentos juntos',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.scrollToTop();
  }

  abrirLightbox(foto: Foto): void {
    this.fotoSelecionada = foto;
    this.lightboxAtivo = true;
    document.body.style.overflow = 'hidden'; // Impede rolagem quando lightbox estiver aberto
  }

  fecharLightbox(): void {
    this.lightboxAtivo = false;
    document.body.style.overflow = ''; // Restaura rolagem
  }

  @HostListener('document:keydown.escape')
  fecharLightboxComEsc(): void {
    if (this.lightboxAtivo) {
      this.fecharLightbox();
    }
  }

  @HostListener('window:click', ['$event'])
  fecharLightboxForaClick(event: MouseEvent): void {
    if (this.lightboxAtivo) {
      const target = event.target as HTMLElement;
      if (target.classList.contains('lightbox')) {
        this.fecharLightbox();
      }
    }
  }

  private scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
