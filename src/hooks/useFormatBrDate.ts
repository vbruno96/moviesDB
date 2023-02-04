import dayjs from "dayjs"

export function useFormatBrDate(date: string): String {
  const formatedDate = dayjs(date).format('DD-MM-YYYY')

  return formatedDate
}