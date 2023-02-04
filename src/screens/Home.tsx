import { View, Text, FlatList } from "react-native"
import { MovieItemList } from "../components/MovieItemList"

const data = [
  {
    "adult": false,
    "backdrop_path": "/faXT8V80JRhnArTAeYXz0Eutpv9.jpg",
    "genre_ids": [
      16,
      12,
      35,
      10751,
      14
    ],
    "id": 315162,
    "original_language": "en",
    "original_title": "Puss in Boots: The Last Wish",
    "overview": "O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele queimou oito de suas nove vidas, deixando-o com apenas uma vida restante. Gato parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas.",
    "popularity": 4239.37,
    "poster_path": "/pSr0JjkI9iM1Yxe9cqrS6YBonAA.jpg",
    "release_date": "2022-12-07",
    "title": "Gato de Botas 2: O Último Pedido",
    "video": false,
    "vote_average": 8.6,
    "vote_count": 3130
  },
  {
    "adult": false,
    "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 505642,
    "original_language": "en",
    "original_title": "Black Panther: Wakanda Forever",
    "overview": "A rainha Ramonda, Shuri, M'Baku, Okoye e as poderosas Dora Milaje lutam para proteger sua nação após a morte do rei T'Challa. Com a ajuda da Cão de Guerra Nakia e de Everett Ross, eles tentam encontrar um novo caminho para Wakanda.",
    "popularity": 3907.516,
    "poster_path": "/nZ69WTv7n01womaNz3SHa4inA9x.jpg",
    "release_date": "2022-11-09",
    "title": "Pantera Negra: Wakanda para Sempre",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 2159
  },
  {
    "adult": false,
    "backdrop_path": "/q2fY4kMXKoGv4CQf310MCxpXlRI.jpg",
    "genre_ids": [
      878,
      27,
      35
    ],
    "id": 536554,
    "original_language": "en",
    "original_title": "M3GAN",
    "overview": "Uma brilhante roboticista de uma empresa de brinquedos usa inteligência artificial para desenvolver M3GAN, uma boneca realista programada para se relacionar emocionalmente com sua sobrinha recém-órfã. Mas quando a programação da boneca funciona muito bem, ela se torna superprotetora de sua nova amiga... com resultados aterrorizantes.",
    "popularity": 3138.271,
    "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
    "release_date": "2022-12-28",
    "title": "M3GAN",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 1180
  },
  {
    "adult": false,
    "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
    "genre_ids": [
      878,
      12,
      28
    ],
    "id": 76600,
    "original_language": "en",
    "original_title": "Avatar: The Way of Water",
    "overview": "12 anos depois de explorar Pandora e se juntar aos Na'vi, Jake Sully formou uma família com Neytiri e se estabeleceu entre os clãs do novo mundo. Porém, a paz não durará para sempre.",
    "popularity": 1751.144,
    "poster_path": "/mbYQLLluS651W89jO7MOZcLSCUw.jpg",
    "release_date": "2022-12-14",
    "title": "Avatar: O Caminho da Água",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 4933
  },
  {
    "adult": false,
    "backdrop_path": "/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg",
    "genre_ids": [
      10752,
      36,
      18
    ],
    "id": 653851,
    "original_language": "en",
    "original_title": "Devotion",
    "overview": "A história real dos pilotos estadunidenses Jesse Brown e Tom Hudner, dois jovens de mundos muito diferentes. Os dois iniciaram a carreira militar juntos no VF-32 e ao longo do serviço eles são levados ao limite, voando em um jato de combate. Jesse e Tom se tornam amigos e começam a superar cada vez mais desafios lado a lado, mas tudo muda quando um deles é abatido atrás das linhas inimigas.",
    "popularity": 1348.962,
    "poster_path": "/wvCvlxAxnlTV13yNIf4j7h7FqvQ.jpg",
    "release_date": "2022-11-23",
    "title": "Irmãos de Honra",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 209
  },
  {
    "adult": false,
    "backdrop_path": "/Aqldsq65Nj1KAkQD2MzkZsAk5N5.jpg",
    "genre_ids": [
      28,
      53,
      18
    ],
    "id": 846433,
    "original_language": "es",
    "original_title": "The Enforcer",
    "overview": "Um executor tem que sacrificar tudo para salvar uma jovem que ele fez amizade de sua chefe femme fatale que está envolvido no tráfico de cibersexo.",
    "popularity": 1283.112,
    "poster_path": "/62DJXEJbCazNo1woUU6Jr7l7rgQ.jpg",
    "release_date": "2022-09-22",
    "title": "O Assassino Perfeito",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 126
  },
  {
    "adult": false,
    "backdrop_path": "/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg",
    "genre_ids": [
      28,
      10749,
      35
    ],
    "id": 758009,
    "original_language": "en",
    "original_title": "Shotgun Wedding",
    "overview": "Durante a cerimônia de casamento, Darcy e Tom estão reunidos com seus familiares para celebrar o grande momento, quando são surpreendidos por sequestradores. Agora, os noivos têm a missão de salvar as suas famílias do perigo, trazendo a lembrança de quando se apaixonaram um pelo outro.",
    "popularity": 1199.551,
    "poster_path": "/i3OgPuen3vi7UkAQCMZou2NkPUm.jpg",
    "release_date": "2022-12-28",
    "title": "Casamento Armado",
    "video": false,
    "vote_average": 6.4,
    "vote_count": 177
  },
  {
    "adult": false,
    "backdrop_path": "/a4I481szRmycyreQTLrRe4f4YJe.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "id": 842544,
    "original_language": "en",
    "original_title": "Transfusion",
    "overview": "A história de um pai e seu filho tentando se reconectar após uma perda devastadora. O filho, atolado em culpa por uma escolha que nunca fez, e um pai sofrendo de TEPT e sem identidade após se aposentar do Regimento do Serviço Aéreo Especial do Exército Australiano. Em sua última chance com a lei, o pai é jogado no submundo do crime por um ex-irmão do SAS para impedir que seu único filho seja tirado dele.",
    "popularity": 1065.015,
    "poster_path": "/5N9ErU8bpfRRuJQFzDc4FRgdOD4.jpg",
    "release_date": "2023-01-05",
    "title": "Transfusão",
    "video": false,
    "vote_average": 6.7,
    "vote_count": 25
  },
  {
    "adult": false,
    "backdrop_path": "/94kQGMiFbs5MUTlt7kj9dewsMDi.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 676547,
    "original_language": "en",
    "original_title": "Prey for the Devil",
    "overview": "Irmã Ann é uma inquieta de 25 anos que acredita devotamente que realizar exorcismos é sua vocação. Mas ela está em desacordo com as tradições da instituição: freiras não podem realizar exorcismos, apenas padres. Com o apoio de um mentor, um professor que percebe seu dom especial, ela pode observar sessões de treinamento reais. Seu desejo de provar a si mesma toma um rumo pessoal quando ela conhece um dos pacientes mais perturbados da escola. Durante seus encontros angustiantes, a Irmã Ann fica cara a cara com uma força demoníaca que infesta a escola e tem laços misteriosos com seu próprio passado. É então que o poder do mal e suas próprias habilidades surpreendentes são plenamente realizadas.",
    "popularity": 908.765,
    "poster_path": "/mYa1vhjTYakyNCB65lR8Y7jujBn.jpg",
    "release_date": "2022-10-23",
    "title": "A Luz do Demônio",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 463
  },
  {
    "adult": false,
    "backdrop_path": "/tCpMRsHlfR6CcqJYA3kJMS3YApt.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 1035806,
    "original_language": "en",
    "original_title": "Detective Knight: Independence",
    "overview": "Um vigilante toca no ponto fraco de Knight quando ele ameaça explodir as comemorações de 4 de julho da cidade.",
    "popularity": 899.08,
    "poster_path": "/wfFE22EpiBOtN4qpTpxRDTXNodb.jpg",
    "release_date": "2023-01-20",
    "title": "Detetive Knight: Independência",
    "video": false,
    "vote_average": 6.3,
    "vote_count": 12
  },
  {
    "adult": false,
    "backdrop_path": "/1RZlwRdVbKav9O153vWbYCn54Nk.jpg",
    "genre_ids": [
      18,
      35
    ],
    "id": 615777,
    "original_language": "en",
    "original_title": "Babylon",
    "overview": "Durante a era de ouro de Hollywood, em Los Angeles da década de 1920, um jovem latino está determinado a conseguir uma carreira enquanto o cinema entra em fase de transição dos filmes mudos para produções com falas.",
    "popularity": 898.717,
    "poster_path": "/qZUmMxJbGmkIYwnS7qRfSOREmvC.jpg",
    "release_date": "2022-12-22",
    "title": "Babilônia",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 669
  },
  {
    "adult": false,
    "backdrop_path": "/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "id": 661374,
    "original_language": "en",
    "original_title": "Glass Onion: A Knives Out Mystery",
    "overview": "O famoso detetive Benoit Blanc vai à Grécia para desvendar um mistério que envolve um bilionário e seu eclético círculo de amizades.",
    "popularity": 712.876,
    "poster_path": "/zQJcENHbZUpLQ8RKYt9wTzcXCwv.jpg",
    "release_date": "2022-11-23",
    "title": "Glass Onion: Um Mistério Knives Out",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 3144
  },
  {
    "adult": false,
    "backdrop_path": "/cU7itLM8qmwMiaNnWsJPQLKe79j.jpg",
    "genre_ids": [
      878,
      27,
      12,
      28
    ],
    "id": 1013870,
    "original_language": "en",
    "original_title": "Kids vs. Aliens",
    "overview": "",
    "popularity": 706.212,
    "poster_path": "/wQ53sO5n9LCFbssV3oQ4CuajL1L.jpg",
    "release_date": "2023-01-20",
    "title": "Kids vs. Aliens",
    "video": false,
    "vote_average": 2,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": "/ofteFQqIntae7wqVAYYyXOCmkF1.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 980078,
    "original_language": "en",
    "original_title": "Winnie the Pooh: Blood and Honey",
    "overview": "Depois de serem abandonados por Christopher Robin, que estava na faculdade, Pooh e Leitão ficam furiosos.",
    "popularity": 679.476,
    "poster_path": "/wtFwgFFk1ze789ghcadWGEVjj3N.jpg",
    "release_date": "2023-01-27",
    "title": "Winnie the Pooh: Blood and Honey",
    "video": false,
    "vote_average": 6.6,
    "vote_count": 8
  },
  {
    "adult": false,
    "backdrop_path": "/xTsERrOCW15OIYl5aPX7Jbj38wu.jpg",
    "genre_ids": [
      28,
      18,
      36
    ],
    "id": 724495,
    "original_language": "en",
    "original_title": "The Woman King",
    "overview": "Nanisca era a comandante do exército do Reino de Daomé, um dos locais mais poderosos da África nos séculos XVII e XIX. Durante o período, o grupo militar era composto apenas por mulheres, entre as guerreiras está a filha de Nanisca, Nawi, juntas elas combateram os colonizadores franceses, tribos rivais e todos aqueles que tentaram escravizar seu povo e destruir suas terras.",
    "popularity": 654.249,
    "poster_path": "/dTXXXMwZ30LVf51nJvh2QGKPIY6.jpg",
    "release_date": "2022-09-16",
    "title": "A Mulher Rei",
    "video": false,
    "vote_average": 7.9,
    "vote_count": 1172
  },
  {
    "adult": false,
    "backdrop_path": "/rodjjIJ8oh9nuBp86PhojcYHTEN.jpg",
    "genre_ids": [
      28,
      9648,
      53,
      80
    ],
    "id": 740952,
    "original_language": "en",
    "original_title": "Savage Salvation",
    "overview": "Um viciado em recuperação busca vingança, contra os traficantes responsáveis ​​pela venda das drogas que resultaram na morte de sua noiva.",
    "popularity": 620.608,
    "poster_path": "/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg",
    "release_date": "2022-12-02",
    "title": "Savage Salvation",
    "video": false,
    "vote_average": 6.6,
    "vote_count": 88
  },
  {
    "adult": false,
    "backdrop_path": "/xOcwcyLM2lqXCrZG8AIHC8DXElF.jpg",
    "genre_ids": [
      27
    ],
    "id": 943221,
    "original_language": "es",
    "original_title": "Mal de ojo",
    "overview": "A misteriosa doença de sua irmãzinha fará com que Nala e sua família viajem para a casa de sua avó para encontrar a cura. Neste lugar, ela aprenderá sobre as lendas locais de bruxas que se alimentam do sangue de crianças para permanecerem eternamente jovens. Quanto mais Nala aprende sobre esses seres diabólicos, mais ela se convence de que sua avó pode ser uma bruxa.",
    "popularity": 614.767,
    "poster_path": "/4I1hVy5PN8QcYIDWIMlnXo0QEsU.jpg",
    "release_date": "2022-09-22",
    "title": "O Olho do Mal",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 161
  },
  {
    "adult": false,
    "backdrop_path": "/cRdA9xjHBbobw4LJFsQ3j1CgpVq.jpg",
    "genre_ids": [
      27
    ],
    "id": 663712,
    "original_language": "en",
    "original_title": "Terrifier 2",
    "overview": "Depois de ser ressuscitado por uma entidade maligna, Art, o Palhaço, está de volta no condado de Miles, onde busca caçar uma adolescente e seu irmão mais novo durante o Halloween!",
    "popularity": 583.378,
    "poster_path": "/spkkTYZq38iyapjMy3CsxU5jK3s.jpg",
    "release_date": "2022-10-06",
    "title": "Terrifier 2",
    "video": false,
    "vote_average": 7,
    "vote_count": 976
  },
  {
    "adult": false,
    "backdrop_path": "/6YRQ8l93ZEs6x4rZojWoHIWdguK.jpg",
    "genre_ids": [
      28,
      80
    ],
    "id": 1024546,
    "original_language": "en",
    "original_title": "Detective Knight: Rogue",
    "overview": "Perseguindo bandidos de Los Angeles a Nova York, o Detetive Knight se depara com seu passado sombrio, colocando em risco seu caso... e sua vida.",
    "popularity": 533.517,
    "poster_path": "/deuqT4q8GS0hXvaSqi97tq3VvTc.jpg",
    "release_date": "2022-10-21",
    "title": "Detetive Knight: Justiça",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 67
  },
  {
    "adult": false,
    "backdrop_path": "/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
    "genre_ids": [
      53
    ],
    "id": 985939,
    "original_language": "en",
    "original_title": "Fall",
    "overview": "Becky e Hunter são duas amigas que buscam aventura e enfrentam grande alturas em suas escaladas. Depois de um grande drama vivido por elas, as duas decidem escalar uma remota torre de rádio abandonada com mais de 2000 pés de altura. Parecia a aventura perfeita para desligar a mente do trágico acontecimento que vivenciaram com o namorado de uma delas. Elas não contavam que ficariam presas e isoladas naquele lugar sem sinal de celular, sem energia e sem pessoas por perto.",
    "popularity": 527.31,
    "poster_path": "/ey5j9PzI1S0jsMPuN8H9ldrGzuX.jpg",
    "release_date": "2022-08-11",
    "title": "A Queda",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 2369
  }
] as MoviesData[]
export type MoviesData = {
  genre_ids: number[]
  id: number
  title: string
  poster_path: string
  release_date: string
  vote_average: number
  backdrop_path: string
}

type MoviesNowPlayingData = {
  page: number
  results: MoviesData[]
  total_pages: number
}

export function Home() {
  return (
    <View className="flex-1 bg-background pl-6 pr-8 pt-8">
      <Text
        className="text-white font-extrabold text-3xl mb-14"
      >
        Movies
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => <MovieItemList movie={item} />}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false} 
      />
    </View>
  )
}
