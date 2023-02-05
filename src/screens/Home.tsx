import { View, Text, FlatList, Alert } from "react-native"
import { MovieItemList } from "../components/MovieItemList"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import { Loading } from "../components/Loading"

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
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState<number>()
  const [movies, setMovies] = useState<MoviesData[]>([])
  const [loading, setLoading] = useState(false)
  
  async function fetchMoviesData(page: number) {
    setLoading(true)
    await api.get<MoviesNowPlayingData>('movie/popular', {
      params: {
        page
      }
    })
      .then(res => {
        setMovies(prevMovies => [...prevMovies, ...res.data.results])
        setTotalPages(res.data.total_pages)
        setPage(prevPage => prevPage + 1)
      })
      .catch(err => {
        Alert.alert('Ops!!!', 'Não foi possível carregar os filmes')
      })
      .finally(() => setLoading(false))
  }
  
  useEffect(() => {
    fetchMoviesData(page)
  }, [])
  
  const { navigate } = useNavigation()

  if (loading && page === 1) return <Loading />

  return (
    <View className="flex-1 bg-background pl-6 pr-8 pt-8">
      <Text
        className="text-white font-extrabold text-3xl mb-14"
      >
        Movies
      </Text>
      <FlatList
        data={movies}
        renderItem={({item}) => <MovieItemList movie={item} onPress={() => navigate('movie', { movieId: item.id})} />}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          totalPages && totalPages > page && fetchMoviesData(page)
        }}
        ListFooterComponent={Loading}
      />
    </View>
  )
}
