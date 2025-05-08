import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SobreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Poderia ser usado para carregar dados dinâmicos se necessário
  }
}
