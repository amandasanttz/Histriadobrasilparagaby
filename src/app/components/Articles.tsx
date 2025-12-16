import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Religiões de Matriz Africana no Brasil",
    excerpt: "Gabrielly, descubra como as religiões africanas foram preservadas e reinventadas no Brasil, resistindo à opressão colonial.",
    content: "As religiões de matriz africana chegaram ao Brasil com os africanos escravizados entre os séculos XVI e XIX, período em que estima-se que cerca de 5 milhões de africanos foram trazidos forçadamente ao território brasileiro. Esses povos, oriundos principalmente da África Ocidental e Central - incluindo iorubás, jejes, bantos, hausás e malês - trouxeram consigo suas cosmologias, divindades e práticas rituais milenares.\n\nApesar da brutal repressão colonial e da imposição forçada do catolicismo pelos senhores de engenho e pela Igreja, essas tradições espirituais resistiram através de estratégias sofisticadas de preservação cultural. O sincretismo religioso não foi apenas uma simples mistura de crenças, mas uma tática de sobrevivência: os escravizados associavam seus orixás, voduns e inquices aos santos católicos para praticar suas religiões em segredo. Por exemplo, Iemanjá foi associada a Nossa Senhora dos Navegantes, Oxalá a Jesus Cristo, e Ogum a São Jorge.\n\nO Candomblé, originário principalmente dos povos iorubás (nagôs), organizou-se em casas de culto chamadas terreiros, onde a tradição oral preservou liturgias complexas, línguas sagradas (iorubá, fon, quicongo) e uma rica mitologia. Cada orixá representa forças da natureza e aspectos da existência humana: Xangô é o orixá da justiça e do trovão, Oxum representa as águas doces e o amor, Iansã comanda os ventos e tempestades, e assim por diante. A Umbanda, surgida no Rio de Janeiro no início do século XX, representa uma síntese brasileira que incorpora elementos do Candomblé, espiritismo kardecista, catolicismo e tradições indígenas.\n\nEstas religiões desenvolveram uma epistemologia própria, com sistemas filosóficos sofisticados sobre a vida, morte, ancestralidade e equilíbrio cósmico. O conceito de axé (força vital), a importância da comunidade (egbé), o respeito aos mais velhos (egbomis) e a relação harmoniosa com a natureza são pilares fundamentais. Apesar de terem enfrentado intensa perseguição - incluindo invasões policiais aos terreiros durante o Estado Novo (1937-1945) e o regime militar - estas religiões resistiram e hoje são reconhecidas como patrimônio cultural imaterial brasileiro. Continuam sendo espaços vitais de resistência cultural, preservação da memória africana, acolhimento comunitário e afirmação identitária para milhões de brasileiros, desafiando o racismo religioso que ainda persiste na sociedade.",
    image: "https://images.unsplash.com/photo-1674469773382-a1dadd0c3abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcmVsaWdpb24lMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NjU5MDY1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "Séculos XVI - XXI",
    readTime: "12 min",
    category: "Cultura e Religião"
  },
  {
    id: 2,
    title: "A História dos Negros no Brasil",
    excerpt: "A resistência, cultura e contribuições fundamentais do povo negro na formação da identidade brasileira.",
    content: "Gabrielly, a história dos negros no Brasil é uma narrativa de horror, resistência, criatividade e contribuição civilizatória. O tráfico transatlântico de escravizados foi um dos maiores crimes contra a humanidade, e o Brasil foi o maior receptor de africanos escravizados nas Américas: entre 1550 e 1850, aproximadamente 5 milhões de africanos foram sequestrados de suas terras e trazidos ao Brasil em condições desumanas nos navios negreiros, onde a taxa de mortalidade chegava a 30-40%.\n\nO sistema escravista brasileiro foi um dos mais brutais e longevos da história moderna, durando oficialmente 388 anos (1500-1888). Os africanos escravizados e seus descendentes foram submetidos a trabalho forçado nas plantações de cana-de-açúcar, nas minas de ouro e diamantes, nas fazendas de café e no trabalho doméstico. Famílias eram separadas, nomes africanos apagados, línguas proibidas, e corpos marcados a ferro quente como propriedade.\n\nMas a história negra no Brasil não é apenas de opressão - é também de resistência extraordinária. Os quilombos foram comunidades autônomas de africanos fugidos que recriaram sociedades livres em território brasileiro. O Quilombo dos Palmares, em Alagoas, existiu por quase um século (1597-1694) e chegou a ter 30 mil habitantes, desenvolvendo uma economia complexa, sistema político e defesa militar. Zumbi dos Palmares, seu último líder, tornou-se símbolo eterno da luta pela liberdade. Houve também revoltas urbanas importantes, como a Revolta dos Malês (1835) em Salvador, liderada por africanos muçulmanos alfabetizados.\n\nA contribuição cultural africana é a espinha dorsal da identidade brasileira. A música brasileira - do samba ao maracatu, do jongo ao funk carioca - tem raízes profundas nas tradições africanas. A capoeira, criada por africanos escravizados como arte marcial disfarçada de dança, é hoje patrimônio cultural imaterial da humanidade. A culinária brasileira incorporou o azeite de dendê, o vatapá, o acarajé, o angu. A língua portuguesa falada no Brasil contém centenas de palavras de origem africana.\n\nIntelectuais e artistas negros moldaram a cultura brasileira: Machado de Assis, o maior escritor brasileiro, era neto de escravizados e negro; Lima Barreto denunciou o racismo em suas obras; Carolina Maria de Jesus revelou a vida nas favelas em 'Quarto de Despejo'; Abdias Nascimento fundou o Teatro Experimental do Negro e lutou pelo reconhecimento da cultura afro-brasileira; Lélia González foi pioneira do feminismo negro brasileiro.\n\nA abolição da escravatura em 13 de maio de 1888, através da Lei Áurea assinada pela Princesa Isabel, não veio acompanhada de políticas de integração, reparação ou distribuição de terras. Os ex-escravizados foram abandonados à própria sorte, sem acesso a educação, terras ou oportunidades. Isso criou o racismo estrutural que persiste até hoje: desigualdades profundas em educação, renda, moradia, expectativa de vida e representação política. O movimento negro brasileiro, organizado desde o início do século XX com entidades como a Frente Negra Brasileira (1931), continua lutando por igualdade, justiça social, políticas afirmativas e valorização da cultura afro-brasileira. A luta antirracista é essencial para construir um Brasil verdadeiramente justo e democrático.",
    image: "https://images.unsplash.com/photo-1697186216431-d7723e5c086f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhpc3RvcnklMjBhZnJpY2FufGVufDF8fHx8MTc2NTkwNjU2MHww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "1550 - Presente",
    readTime: "15 min",
    category: "História Social"
  },
  {
    id: 3,
    title: "Homo Sapiens e a Evolução Humana",
    excerpt: "Da África ao Brasil: entenda como nossa espécie evoluiu e migrou pelo planeta ao longo de milhões de anos.",
    content: "Gabrielly, a história da humanidade é também a história da África - nosso berço comum. A evolução humana começou há cerca de 6 a 7 milhões de anos, quando nossos ancestrais se separaram da linhagem que daria origem aos chimpanzés e bonobos. Esses primeiros hominídeos, como o Sahelanthropus tchadensis e o Australopithecus afarensis (representado pela famosa 'Lucy'), já caminhavam sobre duas pernas (bipedismo), uma característica fundamental que nos define.\n\nAo longo de milhões de anos, diversas espécies humanas coexistiram na Terra. O Homo habilis (2,4-1,4 milhões de anos atrás) foi o primeiro a fabricar ferramentas de pedra. O Homo erectus (1,9 milhão - 70 mil anos atrás) dominou o fogo, desenvolveu tecnologias mais sofisticadas e foi a primeira espécie humana a migrar para fora da África, espalhando-se pela Ásia e Europa. O Homo neanderthalensis (400-40 mil anos atrás), adaptado aos climas frios da Europa e Ásia, tinha cérebros tão grandes quanto os nossos, enterrava seus mortos e criava arte. O Homo floresiensis, descoberto na Indonésia, era uma espécie de humanos pequenos (cerca de 1 metro de altura) que viveu até 50 mil anos atrás. O Homo denisova, descoberto recentemente através de DNA, também coexistiu com nossa espécie.\n\nO Homo sapiens - nossa espécie - surgiu na África há aproximadamente 300 mil anos, como demonstram fósseis encontrados em Jebel Irhoud, no Marrocos. Durante a maior parte de nossa existência, permanecemos na África, desenvolvendo linguagem complexa, pensamento simbólico, arte e cultura. As pinturas rupestres mais antigas conhecidas, na caverna de Blombos na África do Sul, têm 100 mil anos.\n\nHá cerca de 70 mil anos, ocorreu o que os cientistas chamam de 'Revolução Cognitiva': um salto qualitativo nas capacidades mentais humanas que resultou em linguagem mais complexa, planejamento de longo prazo, religião e arte elaborada. Foi após essa revolução que grupos de Homo sapiens começaram a migrar para fora da África em ondas sucessivas. Ao se espalharem pelo mundo, os Homo sapiens encontraram e até mesmo cruzaram com outras espécies humanas - temos entre 1-4% de DNA neandertal, e algumas populações têm DNA denisovano.\n\nOs humanos modernos chegaram à Ásia há cerca de 60-70 mil anos, à Europa há 45 mil anos, e à Austrália há pelo menos 65 mil anos (atravessando o mar em embarcações). A chegada às Américas é mais recente e ainda debatida: a teoria mais aceita é que humanos atravessaram o Estreito de Bering durante a última era glacial, quando o nível dos oceanos estava mais baixo, há cerca de 15-20 mil anos, embora evidências recentes sugiram que pode ter sido ainda mais cedo.\n\nNo território brasileiro, há evidências de ocupação humana muito antiga. O sítio arqueológico de Serra da Capivara, no Piauí, contém pinturas rupestres que podem ter até 25 mil anos (embora essa datação seja contestada). Os fósseis humanos mais antigos das Américas foram encontrados em Lagoa Santa, Minas Gerais, incluindo 'Luzia', uma mulher que viveu há cerca de 11,5 mil anos. Essas descobertas mostram que os primeiros brasileiros eram caçadores-coletores que desenvolveram culturas ricas e diversas muito antes da chegada dos europeus.\n\nHá cerca de 12 mil anos, alguns grupos humanos na Mesopotâmia e em outras regiões começaram a domesticar plantas e animais, dando início à Revolução Agrícola. Isso permitiu o crescimento populacional, o surgimento de cidades e, eventualmente, das civilizações. Hoje, todos os 8 bilhões de humanos no planeta são Homo sapiens - uma única espécie que saiu da África e povoou cada canto do mundo, provando que, geneticamente, somos todos africanos, e as diferenças entre populações são superficiais e recentes na escala evolutiva.",
    image: "https://images.unsplash.com/photo-1759680239551-bd495c0588e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGV2b2x1dGlvbiUyMGFuY2llbnR8ZW58MXx8fHwxNzY1OTA2NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "300 mil anos atrás - Presente",
    readTime: "14 min",
    category: "Pré-História"
  },
  {
    id: 4,
    title: "Dom Pedro I e Dom Pedro II",
    excerpt: "Os dois imperadores do Brasil: suas conquistas, contradições e o legado que deixaram para o país.",
    content: "Gabrielly, o Brasil Imperial (1822-1889) foi marcado por dois governantes que, apesar de pai e filho, tiveram personalidades e estilos de governo muito distintos. Dom Pedro I (1798-1834), filho de Dom João VI de Portugal, nasceu em Lisboa mas tornou-se uma figura central na história brasileira. Quando seu pai retornou a Portugal em 1821, pressionado pela Revolução Liberal do Porto, Pedro permaneceu no Brasil como príncipe regente. A tensão entre as Cortes portuguesas, que queriam recolonizar o Brasil, e as elites brasileiras, que desejavam autonomia, levou ao célebre 'Grito do Ipiranga' em 7 de setembro de 1822.\n\nMas a independência não foi um ato isolado - foi resultado de um processo complexo que envolveu lutas políticas, guerras regionais (especialmente na Bahia e no Grão-Pará), negociações diplomáticas e pressões econômicas britânicas. Dom Pedro I foi aclamado imperador constitucional em 12 de outubro de 1822 e coroado em 1º de dezembro do mesmo ano. Seu governo (1822-1831) foi marcado por tensões entre autoritarismo e liberalismo. Em 1824, ele outorgou a primeira Constituição brasileira, que estabeleceu um Poder Moderador - uma quarta instância de poder concentrada nas mãos do imperador, que podia dissolver a Câmara e intervir nos outros poderes. Isso gerou forte oposição, culminando na Confederação do Equador (1824), uma revolta republicana no Nordeste brutalmente reprimida.\n\nDom Pedro I também enfrentou a Guerra da Cisplatina (1825-1828) contra as Províncias Unidas do Rio da Prata, que resultou na independência do Uruguai e desgastou politicamente o imperador. Sua personalidade autoritária, os gastos excessivos da corte, o envolvimento em escândalos pessoais e, especialmente, sua preocupação com a sucessão portuguesa (após a morte de Dom João VI em 1826) minaram seu apoio político. Em 7 de abril de 1831, pressionado por manifestações populares e perda de apoio das elites, Dom Pedro I abdicou em favor de seu filho Pedro de Alcântara, de apenas 5 anos, e retornou a Portugal, onde lutou para garantir o trono português para sua filha Maria da Glória, enfrentando seu irmão absolutista Dom Miguel.\n\nCom a abdicação, o Brasil entrou no Período Regencial (1831-1840), uma fase turbulenta com diversas revoltas regionais: Cabanagem no Pará, Sabinada na Bahia, Balaiada no Maranhão, e Revolução Farroupilha no Rio Grande do Sul. Para pacificar o país, em 1840 ocorreu o 'Golpe da Maioridade', que declarou Dom Pedro II maior de idade aos 14 anos (a Constituição exigia 18), permitindo que ele assumisse o trono.\n\nDom Pedro II (1825-1891) governou o Brasil por 49 anos (1840-1889), o segundo reinado mais longo da história (perdendo apenas para Luís XIV da França). Diferentemente do pai, Pedro II era estudioso, moderado e comprometido com o progresso científico e cultural. Falava mais de 10 idiomas, mantinha correspondência com cientistas europeus como Louis Pasteur, financiou pesquisas, fundou instituições culturais como o Instituto Histórico e Geográfico Brasileiro e o Imperial Instituto de Belas Artes, e foi um dos primeiros chefes de Estado a adotar novas tecnologias como fotografia e telefone.\n\nSeu reinado foi marcado pela estabilidade política através do sistema parlamentarista bipartidário (Partido Conservador e Partido Liberal), embora na prática o imperador mantivesse grande poder através do Poder Moderador. Economicamente, o Brasil prosperou com o ciclo do café, que substituiu o açúcar como principal produto de exportação. A construção de ferrovias, telégrafo, modernização dos portos e crescimento urbano transformaram o país.\n\nMas a grande questão do século XIX foi a escravidão. O Brasil foi o último país das Américas a abolir a escravidão, e isso ocorreu gradualmente: Lei Eusébio de Queirós (1850) que proibiu o tráfico de africanos, Lei do Ventre Livre (1871) que libertava filhos de escravizadas nascidos após a lei, Lei dos Sexagenários (1885) que libertava escravizados com mais de 65 anos, e finalmente a Lei Áurea em 13 de maio de 1888, assinada pela Princesa Isabel enquanto o imperador estava em viagem à Europa. A abolição, embora moralmente necessária, custou ao imperador o apoio dos grandes fazendeiros, que se voltaram para o republicanismo.\n\nO Brasil também se envolveu em conflitos externos durante o Segundo Reinado, especialmente a Guerra do Paraguai (1864-1870), o maior conflito armado da América do Sul, que envolveu Brasil, Argentina e Uruguai contra o Paraguai de Solano López. A guerra foi devastadora - estima-se que 60% da população paraguaia morreu - e embora o Brasil tenha vencido, o conflito trouxe consequências importantes: fortaleceu o Exército brasileiro, que se tornou uma força política modernizadora e republicana.\n\nA proclamação da República em 15 de novembro de 1889, liderada pelo Marechal Deodoro da Fonseca, foi um golpe militar que pegou muitos de surpresa. Dom Pedro II, já idoso e cansado, não resistiu e partiu para o exílio na Europa. Morreu em Paris em 5 de dezembro de 1891, pobre e saudoso do Brasil. Sua última vontade era ser enterrado em solo brasileiro, desejo que só foi atendido em 1921. O legado dos dois Pedros é complexo: mantiveram a unidade territorial brasileira quando a América Espanhola fragmentou-se em diversas repúblicas, mas também perpetuaram a escravidão e as profundas desigualdades sociais que marcam o Brasil até hoje.",
    image: "https://images.unsplash.com/photo-1632184671130-f63ac80ec83b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBlbXBlcm9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1OTA2NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "1822 - 1889",
    readTime: "16 min",
    category: "Império"
  },
  {
    id: 5,
    title: "A Independência do Brasil",
    excerpt: "Em 7 de setembro de 1822, Dom Pedro I proclamou a independência às margens do rio Ipiranga.",
    content: "Gabrielly, a Independência do Brasil foi um processo histórico complexo que não pode ser reduzido ao gesto dramático de Dom Pedro I às margens do Ipiranga. As raízes da emancipação brasileira remontam a transformações profundas iniciadas no final do século XVIII, quando as ideias iluministas e os exemplos das revoluções Americana (1776) e Francesa (1789) começaram a circular entre as elites coloniais, inspirando movimentos como a Inconfidência Mineira (1789) e a Conjuração Baiana (1798).\n\nO evento que mudou radicalmente a relação entre Brasil e Portugal foi a vinda da família real portuguesa ao Brasil em 1808, fugindo das tropas napoleônicas que invadiram Portugal. Dom João VI instalou a corte no Rio de Janeiro, transformando a colônia em sede do império português. Esta inversão sem precedentes na história colonial trouxe mudanças profundas: abertura dos portos às nações amigas (especialmente Inglaterra), criação de instituições como Banco do Brasil, Imprensa Régia, Biblioteca Real, Jardim Botânico, e a elevação do Brasil a Reino Unido a Portugal e Algarves em 1815. O Rio de Janeiro tornou-se uma capital cosmopolita.\n\nQuando as guerras napoleônicas terminaram, Portugal enfrentou uma grave crise econômica e política. A Revolução Liberal do Porto, em 1820, estabeleceu uma monarquia constitucional e convocou as Cortes (parlamento) para elaborar uma constituição. As Cortes exigiram o retorno de Dom João VI a Lisboa e, crucialmente, tentaram reverter as conquistas brasileiras, querendo recolonizar o Brasil e subordiná-lo novamente a Portugal. Isso gerou forte resistência das elites brasileiras - comerciantes, fazendeiros e burocratas - que haviam se beneficiado da autonomia e do status de Reino.\n\nDom João VI retornou a Portugal em 1821, deixando seu filho Pedro como príncipe regente no Brasil. As Cortes continuaram pressionando pela volta de Pedro e pelo fechamento das instituições brasileiras. A elite brasileira, temendo perder suas conquistas e organizada no 'Partido Brasileiro', pressionou Dom Pedro a permanecer. Em 9 de janeiro de 1822, Pedro recebeu uma petição com 8 mil assinaturas pedindo que ficasse no Brasil. Sua resposta - 'Como é para o bem de todos e felicidade geral da Nação, estou pronto; diga ao povo que fico' - ficou conhecida como o 'Dia do Fico'.\n\nOs meses seguintes foram de tensão crescente. Dom Pedro formou um ministério brasileiro, convocou uma Assembleia Constituinte e recebeu o título de 'Defensor Perpétuo do Brasil'. Em 7 de setembro de 1822, viajando de Santos a São Paulo, recebeu correspondências de Lisboa com ordens de retorno imediato e notícias de que seria considerado traidor. Acompanhado de sua guarda, às margens do riacho Ipiranga, proclamou 'Independência ou Morte!', rompendo definitivamente com Portugal.\n\nMas a independência não foi pacífica nem imediata em todo o território. Províncias com forte presença de tropas portuguesas, especialmente Bahia, Maranhão, Pará e Cisplatina, resistiram. A Guerra de Independência na Bahia (1822-1823) foi particularmente violenta, com participação decisiva de líderes populares negros e mestiços. A expulsão final das tropas portuguesas em 2 de julho de 1823 é celebrada até hoje como a verdadeira independência da Bahia. No Grão-Pará, a adesão só ocorreu em agosto de 1823.\n\nA independência brasileira teve características únicas: foi uma transição conservadora liderada por um príncipe português, manteve a monarquia e a unidade territorial (diferente da América Espanhola que se fragmentou em repúblicas), e preservou a escravidão e a estrutura social colonial. A elite rural manteve seu poder, não houve reforma agrária nem abolição da escravatura. O reconhecimento internacional foi negociado: Inglaterra mediou o reconhecimento português em troca de uma indenização de 2 milhões de libras esterlinas e vantagens comerciais. O Brasil nasceu independente mas endividado e dependente economicamente das potências europeias, especialmente a Inglaterra. A Constituição de 1824, outorgada por Dom Pedro I, estabeleceu o Poder Moderador concentrando grande autoridade no imperador, gerando tensões que marcariam todo o período imperial.",
    image: "https://images.unsplash.com/photo-1632184671130-f63ac80ec83b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBpbmRlcGVuZGVuY2UlMjBoaXN0b3JpY2FsfGVufDF8fHx8MTc2NTkwNjA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "7 de Setembro, 1822",
    readTime: "13 min",
    category: "Império"
  },
  {
    id: 6,
    title: "O Período Colonial",
    excerpt: "O Brasil foi colônia de Portugal por mais de três séculos, período que moldou profundamente nossa cultura.",
    content: "Gabrielly, o período colonial brasileiro (1500-1822) estendeu-se por 322 anos e estabeleceu as fundações econômicas, sociais e culturais sobre as quais o Brasil moderno foi construído. Esse longo período não foi homogêneo - passou por diferentes ciclos econômicos e transformações políticas que moldaram profundamente o território e a sociedade.\n\nA chegada de Pedro Álvares Cabral em 22 de abril de 1500 marcou o início da presença portuguesa na terra que chamaram de Vera Cruz, depois Santa Cruz, e finalmente Brasil (devido à exploração do pau-brasil). As primeiras três décadas (1500-1530) foram de exploração extrativista do pau-brasil através do escambo com povos indígenas. Portugal estava focado no lucrativo comércio com as Índias e inicialmente não colonizou efetivamente o território.\n\nA colonização sistemática começou com o sistema de capitanias hereditárias (1534), quando Dom João III dividiu o território em 15 faixas de terra doadas a donatários da pequena nobreza portuguesa. O sistema foi majoritariamente um fracasso - apenas as capitanias de Pernambuco e São Vicente prosperaram. Em 1549, a Coroa portuguesa criou o Governo-Geral, centralizando a administração colonial. Tomé de Sousa foi o primeiro governador-geral, fundando Salvador como primeira capital.\n\nO açúcar tornou-se o motor econômico da colônia. O Nordeste, especialmente Pernambuco e Bahia, desenvolveu uma economia de plantation baseada em grandes propriedades (engenhos), monocultura de exportação e trabalho escravo. Inicialmente, os portugueses tentaram escravizar indígenas, mas a resistência indígena, as epidemias que dizimaram populações nativas e a oposição jesuíta levaram à importação maciça de africanos escravizados. Entre 1550 e 1850, cerca de 5 milhões de africanos foram trazidos ao Brasil, fazendo do tráfico negreiro um dos negócios mais lucrativos do império português.\n\nA sociedade colonial era rigidamente hierárquica: no topo, os grandes proprietários rurais (senhores de engenho); abaixo, pequenos proprietários, comerciantes e funcionários coloniais; na base, a massa de escravizados africanos e indígenas. A mestiçagem foi intensa, criando uma população de mestiços, mulatos e mamelucos que ocupavam posições intermediárias. A Igreja Católica exercia controle ideológico através da Inquisição (que fez visitas ao Brasil) e da catequização.\n\nNo século XVII, o Brasil passou por crises: invasões holandesas em Salvador (1624-1625) e depois em Pernambuco (1630-1654), onde Maurício de Nassau governou estabelecendo um período de relativa prosperidade e tolerância religiosa. A expulsão dos holandeses foi seguida pela decadência do açúcar brasileiro no mercado internacional devido à concorrência antilhana.\n\nO descobrimento de ouro em Minas Gerais no final do século XVII transformou radicalmente a colônia. O ciclo do ouro (1690-1780) deslocou o eixo econômico do Nordeste para o Centro-Sul. A corrida do ouro atraiu centenas de milhares de portugueses e escravizados africanos para as Minas Gerais, Goiás e Mato Grosso. Cidades como Ouro Preto, Mariana, Sabará e Diamantina floresceram. A riqueza mineral permitiu o desenvolvimento de uma cultura barroca sofisticada (Aleijadinho, Mestre Ataíde) e uma sociedade urbana mais complexa.\n\nA Coroa portuguesa explorava o ouro através do quinto (20% de imposto sobre o ouro extraído) e de monopólios comerciais. O sistema de exploração levou a tensões, como a Revolta de Filipe dos Santos (1720) e a Inconfidência Mineira (1789), liderada por Tiradentes e inspirada por ideais iluministas e pelo exemplo da independência americana. O movimento foi brutalmente reprimido.\n\nAs reformas pombalinas (1750-1777), implementadas pelo Marquês de Pombal, tentaram modernizar a administração colonial: expulsão dos jesuítas (1759), criação de companhias de comércio monopolistas, transferência da capital de Salvador para o Rio de Janeiro (1763), e estímulo à produção de outros produtos como algodão, tabaco e couros. No final do século XVIII, novos movimentos contestatórios surgiram, como a Conjuração Baiana (1798), que tinha caráter mais popular e abolicionista.\n\nO sistema colonial português baseava-se no exclusivo metropolitano (monopólio comercial), que obrigava a colônia a comerciar apenas com Portugal, enriquecendo a metrópole enquanto mantinha o Brasil em posição subordinada. Essa estrutura gerou profundas desigualdades que persistem até hoje: concentração fundiária, economia dependente de exportação de produtos primários, e uma sociedade profundamente desigual e hierarquizada. O período colonial deixou marcas indeléveis na formação social, econômica e cultural brasileira.",
    image: "https://images.unsplash.com/photo-1639192822808-21771854c670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbmlhbCUyMGJyYXppbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjU5MDYwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "1500 - 1822",
    readTime: "14 min",
    category: "Colônia"
  }
];

export function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Artigos Históricos</h2>
          <p className="text-xl text-gray-600">
            Gabrielly, explore momentos fascinantes da nossa história
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-[1.02] hover:shadow-xl"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-purple-600" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Article Modal */}
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl max-w-3xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-96">
                <ImageWithFallback
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                >
                  <ArrowRight className="w-6 h-6 transform rotate-180" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm">
                    {selectedArticle.category}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{selectedArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{selectedArticle.readTime}</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                  {selectedArticle.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {selectedArticle.content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}