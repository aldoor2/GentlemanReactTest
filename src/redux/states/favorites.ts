import { LocalStoragetypes, Person } from '@/models'
import { getLocalStorage, setLocalStorage } from '@/utilities'
import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = [] as Person[]

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(LocalStoragetypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStoragetypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Person[]>) => {
      setLocalStorage(
        LocalStoragetypes.FAVORITES,
        JSON.stringify(action.payload)
      )
      return action.payload
    },
    removeFavorite: (state, action: PayloadAction<Person>) => {
      const filteredState = current(state).filter(
        (p: Person) => p.id !== action.payload.id
      )
      setLocalStorage(
        LocalStoragetypes.FAVORITES,
        JSON.stringify(filteredState)
      )
      return filteredState
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
