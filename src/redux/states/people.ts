import { LocalStoragetypes, Person } from '@/models'
import { getLocalStorage, setLocalStorage } from '@/utilities'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Person[] = []

export const peopleSlice = createSlice({
  name: 'people',
  initialState: getLocalStorage(LocalStoragetypes.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStoragetypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(LocalStoragetypes.PEOPLE, JSON.stringify(state))
      return action.payload
    },
  },
})

export const { addPeople } = peopleSlice.actions

export default peopleSlice.reducer
