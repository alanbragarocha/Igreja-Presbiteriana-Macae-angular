import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface Legado {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-ashbel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ashbel.component.html',
  styleUrls: ['./ashbel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AshbelComponent implements OnInit {
  timelineEvents: TimelineEvent[] = [
    {
      year: '1833',
      title: 'Nascimento',
      description:
        'Ashbel Green Simonton nasce em 20 de janeiro na Pensilvânia, Estados Unidos, em uma família presbiteriana devota.',
    },
    {
      year: '1855',
      title: 'Formação Princeton',
      description:
        'Gradua-se pelo College of New Jersey (atual Universidade de Princeton) e ingressa no Seminário Teológico de Princeton.',
    },
    {
      year: '1858',
      title: 'Chamado Missionário',
      description:
        'Inspirado por uma pregação sobre missões, decide se dedicar ao trabalho missionário no exterior e se candidata à Junta de Missões.',
    },
    {
      year: '1859',
      title: 'Chegada ao Brasil',
      description:
        'Em 12 de agosto, chega ao Rio de Janeiro como o primeiro missionário presbiteriano enviado ao Brasil pela Igreja Presbiteriana dos Estados Unidos.',
    },
    {
      year: '1860',
      title: 'Primeiro Culto em Português',
      description:
        'Apenas um ano após sua chegada, realiza o primeiro culto em português em sua residência no Rio de Janeiro.',
    },
    {
      year: '1862',
      title: 'Primeira Igreja Presbiteriana',
      description:
        'Organiza a Primeira Igreja Presbiteriana do Brasil no Rio de Janeiro, com três membros fundadores.',
    },
    {
      year: '1864',
      title: 'Imprensa Evangélica',
      description:
        'Funda o jornal "Imprensa Evangélica", o primeiro periódico protestante do Brasil, importante instrumento de divulgação da fé reformada.',
    },
    {
      year: '1864',
      title: 'Chegada de Reforços',
      description:
        'Recebe a ajuda de Alexander Latimer Blackford (seu cunhado) e de Francis Joseph Christopher Schneider, ampliando o trabalho missionário.',
    },
    {
      year: '1865',
      title: 'Presbitério do Rio de Janeiro',
      description:
        'Estabelece o Presbitério do Rio de Janeiro, a primeira organização presbiterial no Brasil.',
    },
    {
      year: '1867',
      title: 'Falecimento',
      description:
        'Morre em 9 de dezembro, aos 34 anos, vítima de febre amarela, após apenas oito anos de trabalho missionário no Brasil.',
    },
  ];

  legados: Legado[] = [
    {
      icon: 'fas fa-church',
      title: 'Implantação do Presbiterianismo',
      description:
        'Estabeleceu as bases para a denominação que viria a se tornar uma das principais igrejas evangélicas históricas do Brasil.',
    },
    {
      icon: 'fas fa-book',
      title: 'Literatura Evangélica',
      description:
        'Pioneiro na produção e distribuição de literatura protestante em português, contribuindo para a divulgação da fé reformada.',
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Educação',
      description:
        'Iniciou a tradição presbiteriana de investimento na educação, que mais tarde resultou na fundação de escolas e universidades.',
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'Formação de Líderes',
      description:
        'Treinou os primeiros pastores brasileiros, incluindo José Manoel da Conceição, ex-padre católico e primeiro pastor protestante brasileiro.',
    },
  ];

  curiosidades: string[] = [
    'Simonton aprendeu português em tempo recorde, conseguindo pregar em português apenas um ano após sua chegada.',
    'Manteve um diário detalhado que é uma fonte valiosa sobre os primórdios do protestantismo no Brasil.',
    'Foi um dos primeiros a traduzir hinos protestantes para o português brasileiro.',
    'Demonstrou grande respeito pela cultura brasileira, adaptando sua abordagem missionária ao contexto local.',
    'Era conhecido por seu caráter humilde e por sua disposição para trabalhar incansavelmente, apesar das dificuldades climáticas e culturais.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
