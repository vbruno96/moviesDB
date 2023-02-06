import { useContext } from 'react'
import { AppContext } from '../AppStore/appContext'


export function useApp() {
  return useContext(AppContext)
}