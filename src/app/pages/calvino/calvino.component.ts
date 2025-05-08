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

interface Denominacao {
  name: string;
  description: string;
}

interface Curiosidade {
  title: string;
  description: string;
}

@Component({
  selector: 'app-calvino',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calvino.component.html',
  styleUrls: ['./calvino.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalvinoComponent implements OnInit {
  timelineEvents: TimelineEvent[] = [
    {
      year: '1509',
      title: 'Nascimento',
      description:
        'João Calvino nasce em 10 de julho em Noyon, França, filho de Gérard Cauvin, um secretário episcopal.',
    },
    {
      year: '1523',
      title: 'Educação em Paris',
      description:
        'Aos 14 anos, Calvino vai para Paris estudar humanidades e direito na Universidade.',
    },
    {
      year: '1533',
      title: 'Conversão',
      description:
        'Calvino experimenta uma "conversão súbita", abandonando o catolicismo romano para abraçar a fé reformada.',
    },
    {
      year: '1536',
      title: 'Institutas da Religião Cristã',
      description:
        'Publica a primeira edição das Institutas, sua obra-prima teológica, aos 27 anos de idade.',
    },
    {
      year: '1536',
      title: 'Chegada a Genebra',
      description:
        'Guillaume Farel convence Calvino a ficar em Genebra para ajudar na reforma da cidade.',
    },
    {
      year: '1538',
      title: 'Exílio em Estrasburgo',
      description:
        'Expulso de Genebra, Calvino parte para Estrasburgo onde serve como pastor da igreja francesa.',
    },
    {
      year: '1541',
      title: 'Retorno a Genebra',
      description:
        'Convidado a retornar a Genebra, Calvino implementa reformas eclesiásticas e sociais na cidade.',
    },
    {
      year: '1559',
      title: 'Academia de Genebra',
      description:
        'Funda a Academia de Genebra, que mais tarde se tornaria a Universidade de Genebra.',
    },
    {
      year: '1564',
      title: 'Falecimento',
      description:
        'Morre em 27 de maio em Genebra, aos 54 anos, deixando um legado teológico e eclesiástico duradouro.',
    },
  ];

  legados: Legado[] = [
    {
      icon: 'fas fa-book',
      title: 'Teologia Sistemática',
      description:
        'Desenvolveu uma abordagem sistemática e coerente para a teologia cristã, expressa nas Institutas.',
    },
    {
      icon: 'fas fa-church',
      title: 'Governo Eclesiástico',
      description:
        'Estabeleceu o sistema presbiteriano de governo da igreja, baseado em conselhos de presbíteros.',
    },
    {
      icon: 'fas fa-university',
      title: 'Educação',
      description:
        'Promoveu a educação teológica e fundou a Academia de Genebra, modelo para muitas universidades.',
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Ética Social',
      description:
        'Influenciou o desenvolvimento de sistemas políticos democráticos e a ética do trabalho.',
    },
  ];

  denominacoes: Denominacao[] = [
    {
      name: 'Igreja Presbiteriana',
      description:
        'Adota o sistema de governo presbiteriano e enfatiza a soberania de Deus e a autoridade das Escrituras.',
    },
    {
      name: 'Igreja Reformada',
      description:
        'Segue diretamente a tradição calvinista europeia, especialmente na Holanda, Suíça e França.',
    },
    {
      name: 'Igreja Congregacional',
      description:
        'Incorpora elementos da teologia calvinista com ênfase na autonomia das congregações locais.',
    },
    {
      name: 'Igreja Batista Reformada',
      description: 'Combina princípios batistas com a teologia reformada calvinista.',
    },
    {
      name: 'Igreja Reformada Presbiteriana',
      description:
        'Mantém uma adesão estrita aos princípios calvinistas e aos padrões de Westminster.',
    },
  ];

  curiosidades: Curiosidade[] = [
    {
      title: 'Formação em Direito',
      description:
        'Antes de se tornar teólogo, Calvino estudou direito e era um humanista educado, o que influenciou sua abordagem metodológica e sistemática da teologia.',
    },
    {
      title: 'Produção Literária',
      description:
        'Além das Institutas, escreveu comentários sobre quase todos os livros da Bíblia, tratados teológicos e milhares de cartas.',
    },
    {
      title: 'Rotina Diária',
      description:
        'Em Genebra, Calvino tinha uma rotina disciplinada: pregava e lecionava diariamente, escrevia, aconselhava e recebia refugiados protestantes de toda a Europa.',
    },
    {
      title: 'Embaixadores da Fé',
      description:
        'De Genebra, enviou centenas de pastores treinados para estabelecer igrejas reformadas por toda a Europa, incluindo França, Itália, Escócia e Países Baixos.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
