import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import { ArrowLeft } from "phosphor-react-native"
import { useFormatBrDate } from "../hooks/useFormatBrDate"
import { ProgressBar } from "../components/ProgressBar"
import { formatCurrency } from "react-native-format-currency"
import { useNavigation } from "@react-navigation/native"

const data = {
  "backdrop_path": "/faXT8V80JRhnArTAeYXz0Eutpv9.jpg",
  "budget": 90000000,
  "genres": [
    {
      "id": 16,
      "name": "Animação"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
    {
      "id": 35,
      "name": "Comédia"
    },
    {
      "id": 10751,
      "name": "Família"
    },
    {
      "id": 14,
      "name": "Fantasia"
    }
  ],
  "id": 315162,
  "overview": "O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele queimou oito de suas nove vidas, deixando-o com apenas uma vida restante. Gato parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas.",
  "production_companies": [
    {
      "name": "Universal Pictures",
    },
    {
      "name": "DreamWorks Animation",
    }
  ],
  "release_date": "2022-12-07",
  "title": "Gato de Botas 2: O Último Pedido",
  "vote_average": 8.567,
} as MovieData

type MovieData = {
  backdrop_path: string
  budget: number
  genres: {
    id: number
    name: string
  }[]
  id: number
  overview: string
  production_companies: {
    id: number
    name: string
  }[]
  release_date: string
  title: string
  vote_average: number
}


export function Movie() {
  const formatedDate = useFormatBrDate(data.release_date)
  const uriImagesTMDB = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
  const voteAverageOneDecimal = data.vote_average.toFixed(1)
  const [budgetFormatedCurrency] = formatCurrency({amount: data.budget, code: 'USD'})
  const genres = data.genres.map(genre => genre.name)
  const companies = data.production_companies.map(companie => companie.name)
  
  const { goBack } = useNavigation()
  
  return (
    <View
      className="flex-1 bg-background px-6 pt-8"
    >
      <View
        className="flex-row justify-center"
      >
        <TouchableOpacity
          className="absolute top-0 left-0"
          activeOpacity={.7}
          onPress={goBack}
        >
          <ArrowLeft
            size={32} 
            color="#662CB2"
          />
        </TouchableOpacity>
        <View
          className="w-10/12 items-center"
        >
          <Text
            className="text-white font-extrabold text-2xl text-center"
          >
            {data.title}
          </Text>
          <Text
            className="mt-2.5 text-white font-light text-sm"
          >
            {formatedDate}
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 28
        }}
      >
        <Image
            className="rounded-lg mt-10 w-full h-52"
            source={{
              uri: uriImagesTMDB
            }}
          />
          <Text
            className="mt-3 mb-3 text-lg text-white text-center"
          >
            {voteAverageOneDecimal}
          </Text>
          <ProgressBar voteAverage={data.vote_average} />
          <Text
            className="mt-11 text-white font-semibold text-base"
          >
            Gêneros
          </Text>
          <Text
            className="mt-3.5 text-white text-sm"
          >
            {
              genres.toString()
            }
          </Text>
          <Text
            className="mt-8 text-white font-semibold text-base"
          >
            Resumo
          </Text>
          <Text
            className="mt-3.5 text-white text-sm"
          >
            {
              data.overview
            }
          </Text>
          <Text
            className="mt-8 text-white font-semibold text-base"
          >
            Orçamento
          </Text>
          <Text
            className="mt-3.5 text-white text-sm"
          >
            {
              budgetFormatedCurrency
            }
          </Text>
          <Text
            className="mt-8 text-white font-semibold text-base"
          >
            Produtoras
          </Text>
          <Text
            className="mt-3.5 text-white text-sm"
          >
            {
              companies.toString()
            }
          </Text>
      </ScrollView>
    </View>
  )
}
