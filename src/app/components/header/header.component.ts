import {
  Component,
  OnInit,
  HostListener,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Renderer2,
  Inject,
  AfterViewInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isMenuOpen = false;
  activeDropdown: string | null = null;
  isMobile = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verificar se estamos em um dispositivo mobile
    this.checkIfMobile();
  }

  ngAfterViewInit(): void {
    // Garantir que os elementos do DOM estejam prontos
    setTimeout(() => {
      this.checkIfMobile();
      this.cdr.markForCheck();
    }, 0);
  }

  // Verifica se estamos em um dispositivo mobile (largura < 992px)
  checkIfMobile(): void {
    this.isMobile = window.innerWidth < 992;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    // Adiciona ou remove a classe menu-open no body
    if (this.isMenuOpen) {
      this.renderer.addClass(this.document.body, "menu-open");

      // Remover qualquer elemento menu-overlay que exista
      const overlays = this.document.querySelectorAll(".menu-overlay");
      overlays.forEach((overlay) => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
      });
    } else {
      this.renderer.removeClass(this.document.body, "menu-open");
    }

    this.cdr.markForCheck();
  }

  // Método para fechar o menu - aprimorado
  closeMenu(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.renderer.removeClass(this.document.body, "menu-open");
      this.activeDropdown = null;

      // Forçar o fechamento do menu com um pequeno atraso
      // para garantir que a animação funcione corretamente
      setTimeout(() => {
        this.cdr.markForCheck();
      }, 50);
    }
  }

  toggleDropdown(event: MouseEvent, dropdownName: string): void {
    event.preventDefault();
    event.stopPropagation();

    // Em dispositivos móveis, permite a navegação em cascata
    if (this.isMobile) {
      this.activeDropdown =
        this.activeDropdown === dropdownName ? null : dropdownName;
    } else {
      // Em desktop, abre imediatamente
      this.activeDropdown =
        this.activeDropdown === dropdownName ? null : dropdownName;
    }

    this.cdr.markForCheck();
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    // Fecha o dropdown quando clicar fora dele
    const target = event.target as HTMLElement;
    if (!target.closest(".dropdown-toggle") && !target.closest(".submenu")) {
      this.activeDropdown = null;
      this.cdr.markForCheck();
    }
  }

  @HostListener("window:resize")
  onResize(): void {
    // Fecha o menu em dispositivos móveis quando a janela for redimensionada
    this.checkIfMobile();
    if (this.isMenuOpen && !this.isMobile) {
      this.isMenuOpen = false;
      this.renderer.removeClass(this.document.body, "menu-open");
      this.cdr.markForCheck();
    }
  }

  // Detecta cliques em links e fecha o menu mobile se estiver aberto
  @HostListener("click", ["$event"])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    // Se clicar em um link (exceto dropdown), fecha o menu mobile
    if (
      target.tagName === "A" &&
      !target.classList.contains("dropdown-toggle")
    ) {
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
        this.renderer.removeClass(this.document.body, "menu-open");
        this.cdr.markForCheck();
      }
    }
  }

  // Método específico para navegar e fechar o menu - nova solução
  navigateToPage(route: string): void {
    // Programar a navegação para ocorrer após o fechamento do menu
    setTimeout(() => {
      this.router.navigate([route]);
    }, 100);

    // Fechar o menu
    this.closeMenu();
  }

  // Método para navegar para fragmentos específicos
  navigateToFragment(fragment: string): void {
    // Primeiro verificamos se já estamos na página inicial
    if (
      this.router.url.split("#")[0] === "/" ||
      this.router.url.split("#")[0] === ""
    ) {
      // Se estamos na página inicial, podemos scrollar diretamente para o elemento
      const element = this.document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se não estamos na página inicial, navegamos para a página inicial com o fragmento
      this.router.navigate(["/"], { fragment: fragment });
    }

    // Fecha o menu mobile após clicar com um pequeno atraso
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.renderer.removeClass(this.document.body, "menu-open");

      // Atraso para permitir que a navegação ocorra primeiro
      setTimeout(() => {
        this.activeDropdown = null;
        this.cdr.markForCheck();
      }, 50);
    } else {
      this.activeDropdown = null;
      this.cdr.markForCheck();
    }
  }
}
