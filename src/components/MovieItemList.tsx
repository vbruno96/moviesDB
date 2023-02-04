import { View, TouchableOpacity, TouchableOpacityProps, Text, Image, Platform } from "react-native"
import { MoviesData } from "../screens/Home"
import { useFormatBrDate } from "../hooks/useFormatBrDate"
import { ListPlus, Star } from "phosphor-react-native"

type MovieItemListProps = {
  movie: MoviesData
} & TouchableOpacityProps



export function MovieItemList({movie, ...props}: MovieItemListProps) {
  
  const uriImagesTMDB = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  const resizeMode = Platform.OS === 'ios'? 'stretch' : 'center'
  const formatedDate = useFormatBrDate(movie.release_date)
  
  return (
    <TouchableOpacity
      activeOpacity={.7} 
      className="w-full mb-7"
      { ...props }
    >
      <View
        className="flex-row"
      >
        <Image
          source={{
            uri: uriImagesTMDB
          }}
          style={{
            width: 100,
            height: 100,
            resizeMode,
            borderRadius: 8,
          }}
        />
        <View
          className="ml-8 flex-shrink justify-between"
        >
          <Text 
            className="text-white font-semibold text-lg"
          >
              {movie.title}
            </Text>
          <Text
            className="text-white font-light text-xs"
          >
            {formatedDate}
          </Text>
        </View>
        <View
          className="self-center items-center ml-auto"
        >
          <ListPlus
            color="#0C9F7B"
            size={24}
          />
          <Text
            className="text-white text-xs"
          >
            {movie.vote_average}
          </Text>
          <Star
            color="#662CB2"
            size={16}
            weight="fill"
          />
        </View>
      </View>
      
    </TouchableOpacity>
  )
}
