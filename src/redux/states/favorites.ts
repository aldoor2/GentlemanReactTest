import { LocalStoragetypes, Person } from '@/models'
import { getLocalStorage, setLocalStorage } from '@/utilities'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Person[] = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(LocalStoragetypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStoragetypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorites: (state, action) => {
      setLocalStorage(
        LocalStoragetypes.FAVORITES,
        JSON.stringify(action.payload)
      )
      return action.payload
    },
  },
})

export const { addFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer
