import { View, Text, FlatList, Alert, TouchableOpacity } from "react-native"
import { MovieItemList } from "../components/MovieItemList"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import { Loading } from "../components/Loading"
import { useApp } from "../hooks/useAuth"
import { TypeAppActions } from "../AppStore/appActions"
import { SignOut } from "phosphor-react-native"

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
  
  const {dispatch, state} = useApp()
  
  async function fetchMoviesData(page: number) {
    dispatch({type: TypeAppActions.FETCH, payload: { isLoading: true }})
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
      .finally(() => dispatch({type: TypeAppActions.FETCH, payload: { isLoading: false }}))
  }

  function logout() {
    dispatch({type: TypeAppActions.SIGNOUT, payload: { userIsLogged: false }})
  }
  
  useEffect(() => {
    fetchMoviesData(page)
  }, [])
  
  const { navigate } = useNavigation()

  if (state.isLoading && page === 1) return <Loading />

  return (
    <View className="flex-1 bg-background pl-6 pr-8 pt-8">
      <View
        className="flex-row justify-between items-center mb-14"
      >
        <Text
          className="text-white font-extrabold text-3xl"
        >
          Movies
        </Text>
        <TouchableOpacity
          activeOpacity={.7}
          onPress={logout}
        >
          <SignOut
              size={30}
              color="#FFF"
            />
        </TouchableOpacity>
      </View>
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
