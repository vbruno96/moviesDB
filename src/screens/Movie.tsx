import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from "react-native"
import { ArrowLeft } from "phosphor-react-native"
import { useFormatBrDate } from "../hooks/useFormatBrDate"
import { ProgressBar } from "../components/ProgressBar"
import { formatCurrency } from "react-native-format-currency"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import { Loading } from "../components/Loading"


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

type Params = {
  movieId: number
}


export function Movie() {
  const route = useRoute()
  const { movieId } = route.params as Params

  const [movie, setMovie] = useState<MovieData>()
  const [loading, setLoading] = useState(false)
  
  const { goBack } = useNavigation()

  async function fetchMovie() {
    setLoading(true)
    await api.get<MovieData>(`movie/${movieId}`)
      .then(res => setMovie(res.data))
      .catch(err => {
        Alert.alert('Ops!!!', 'Não foi possível carregar o filme')
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchMovie()
  }, [])

  const formatedDate = movie?.release_date ? useFormatBrDate(movie.release_date) : 'Data de lançamento não informada'
  const uriImagesTMDB = `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`
  const voteAverageOneDecimal = movie?.vote_average.toFixed(1)
  const [budgetFormatedCurrency] = movie?.budget ? formatCurrency({amount: movie.budget, code: 'USD'}) : ['Orçamento não informado']
  const genres = movie?.genres.map(genre => genre.name)
  const companies = movie?.production_companies.map(companie => companie.name)

  if (loading) return <Loading />

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
            {movie?.title}
          </Text>
          <Text
            className="mt-2.5 text-white font-light text-sm"
          >
            { formatedDate }
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
              uri: `https://image.tmdb.org/t/p/w500/${uriImagesTMDB}`
            }}
          />
          <Text
            className="mt-3 mb-3 text-lg text-white text-center"
          >
            { voteAverageOneDecimal }
          </Text>
          <ProgressBar voteAverage={movie?.vote_average ? movie.vote_average : 0} />
          <Text
            className="mt-11 text-white font-semibold text-base"
          >
            Gêneros
          </Text>
          <Text
            className="mt-3.5 text-white text-sm"
          >
            { genres }
          </Text>
          <Text
            className="mt-8 text-white font-semibold text-base"
          >
            Resumo
          </Text>
          <Text
            className="mt-3.5 text-white text-sm"
          >
            { movie?.overview }
          </Text>
          <Text
            className="mt-8 text-white font-semibold text-base"
          >
            Orçamento
          </Text>
          <Text
            className="mt-3.5 text-white text-sm"
          >
            { budgetFormatedCurrency }
          </Text>
          <Text
            className="mt-8 text-white font-semibold text-base"
          >
            Produtoras
          </Text>
          <Text
            className="mt-3.5 text-white text-sm"
          >
            { companies }
          </Text>
      </ScrollView>
    </View>
  )
}
