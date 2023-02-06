import { View } from "react-native";

type ProgressBarProps = {
  voteAverage: number
}
export function ProgressBar({ voteAverage }: ProgressBarProps) {
  const voteAveragePercent = voteAverage * 10
  
  return (
    <View
      className="w-52 h-2.5 bg-zinc-400 rounded-full mx-auto"
    >
      <View
        className="h-2.5 bg-accent rounded-full"
        style={{
          width: `${voteAveragePercent}%`
        }}
      />
    </View>
  )
}
