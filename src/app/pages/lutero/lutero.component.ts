import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";

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

interface Principio {
  titulo: string;
  descricao: string;
}

interface Curiosidade {
  title: string;
  description: string;
}

@Component({
  selector: "app-lutero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./lutero.component.html",
  styleUrls: ["./lutero.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuteroComponent implements OnInit {
  timelineEvents: TimelineEvent[] = [
    {
      year: "1483",
      title: "Nascimento",
      description:
        "Martinho Lutero nasce em 10 de novembro em Eisleben, Alemanha, filho de Hans e Margarethe Lutero.",
    },
    {
      year: "1505",
      title: "Entrada no Mosteiro",
      description:
        "Após quase ser atingido por um raio durante uma tempestade, Lutero abandona seus estudos de Direito e ingressa no mosteiro agostiniano.",
    },
    {
      year: "1507",
      title: "Ordenação Sacerdotal",
      description:
        "É ordenado sacerdote e celebra sua primeira missa, vivendo intensamente a espiritualidade monástica.",
    },
    {
      year: "1510",
      title: "Viagem a Roma",
      description:
        "Viaja a Roma a serviço de sua ordem e fica chocado com a corrupção e mundanidade do clero romano.",
    },
    {
      year: "1512",
      title: "Doutorado em Teologia",
      description:
        "Recebe o título de Doutor em Teologia e assume a cátedra de estudos bíblicos na Universidade de Wittenberg.",
    },
    {
      year: "1517",
      title: "As 95 Teses",
      description:
        "Em 31 de outubro, afixa suas 95 teses na porta da Igreja do Castelo de Wittenberg, contestando a venda de indulgências e práticas da igreja.",
    },
    {
      year: "1521",
      title: "Dieta de Worms",
      description:
        'Convocado pelo imperador Carlos V, Lutero se recusa a retratar-se diante da Dieta (assembleia) de Worms, com a famosa declaração: "Aqui estou. Não posso fazer diferente. Que Deus me ajude."',
    },
    {
      year: "1521-1522",
      title: "Castelo de Wartburg",
      description:
        "Escondido no Castelo de Wartburg sob proteção do príncipe Frederico da Saxônia, traduz o Novo Testamento para o alemão.",
    },
    {
      year: "1525",
      title: "Casamento",
      description:
        "Casa-se com Katharina von Bora, uma ex-freira, com quem teve seis filhos.",
    },
    {
      year: "1529",
      title: "Catecismos",
      description:
        "Publica os Catecismos Maior e Menor, documentos fundamentais para a educação religiosa protestante.",
    },
    {
      year: "1530",
      title: "Confissão de Augsburgo",
      description:
        "Philipp Melanchthon apresenta a Confissão de Augsburgo, documento que sistematiza a teologia luterana.",
    },
    {
      year: "1546",
      title: "Falecimento",
      description:
        "Morre em 18 de fevereiro em Eisleben, sua cidade natal, aos 62 anos.",
    },
  ];

  legados: Legado[] = [
    {
      icon: "fas fa-book",
      title: "Tradução da Bíblia",
      description:
        "Sua tradução da Bíblia para o alemão não só tornou as Escrituras acessíveis ao povo comum como também padronizou o idioma alemão moderno.",
    },
    {
      icon: "fas fa-music",
      title: "Hinologia",
      description:
        'Revolucionou a música sacra, compondo hinos em alemão para participação congregacional, incluindo "Castelo Forte é Nosso Deus".',
    },
    {
      icon: "fas fa-church",
      title: "Renovação da Igreja",
      description:
        "Reformulou a liturgia e a prática eclesiástica, enfatizando a pregação da Palavra e a participação dos leigos.",
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Educação Popular",
      description:
        "Defendeu a educação universal, incluindo meninas, e a alfabetização para que todos pudessem ler a Bíblia.",
    },
  ];

  principios: Principio[] = [
    {
      titulo: "Sola Scriptura (Somente a Escritura)",
      descricao:
        "A Bíblia é a única autoridade infalível para fé e prática, superior à tradição e ao magistério eclesiástico.",
    },
    {
      titulo: "Sola Fide (Somente a Fé)",
      descricao:
        "A justificação diante de Deus acontece unicamente pela fé em Cristo, não por obras ou méritos humanos.",
    },
    {
      titulo: "Sola Gratia (Somente a Graça)",
      descricao:
        "A salvação é um dom gratuito de Deus, não algo que pode ser conquistado ou merecido.",
    },
    {
      titulo: "Solus Christus (Somente Cristo)",
      descricao:
        "Jesus Cristo é o único mediador entre Deus e os homens, não sendo necessários outros intercessores.",
    },
    {
      titulo: "Soli Deo Gloria (Somente a Deus a Glória)",
      descricao:
        "Todo o louvor e glória pertencem somente a Deus, não a santos, instituições ou tradições humanas.",
    },
  ];

  curiosidades: Curiosidade[] = [
    {
      title: "Lutero e o Tinteiro",
      description:
        "Conta-se que certa vez, quando Lutero estava estudando na Torre do Castelo de Wartburg, ele teria visto o diabo e atirado um tinteiro nele. Embora a veracidade dessa história seja questionável, até hoje guias turísticos mostram a suposta mancha de tinta na parede.",
    },
    {
      title: "Compositor de Hinos",
      description:
        'Além de reformador, Lutero era músico talentoso. Tocava alaúde e compôs cerca de 36 hinos, entre eles "Ein feste Burg ist unser Gott" (Um Castelo Forte é o Nosso Deus), considerado o hino da Reforma.',
    },
    {
      title: "Pai da Língua Alemã Moderna",
      description:
        "Sua tradução da Bíblia foi tão influente que é considerada a obra fundadora do alemão moderno padronizado, unificando diversos dialetos regionais.",
    },
    {
      title: "Casado com uma Ex-Freira",
      description:
        "Katharina von Bora, esposa de Lutero, era uma ex-freira que fugiu de seu convento em um barril de arenques junto com outras 11 freiras. Inicialmente, Lutero tentou encontrar maridos para todas elas antes de se casar com Katharina.",
    },
    {
      title: "Cervejeiro Caseiro",
      description:
        "Lutero apreciava cerveja (como era comum na época) e sua esposa Katharina administrava uma cervejaria caseira em sua residência, o que ajudava a sustentar a família e os muitos estudantes e visitantes que frequentavam sua casa.",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
