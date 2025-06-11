import type { AppDispatch } from '../../app/store.ts'
import { type AddDeckParams, decksApi } from './decks-api.ts'
import { addDecksAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => {
  return (dispatch: AppDispatch) => {
    decksApi.getDecks().then(res => dispatch(setDecksAC(res.data.items)))
  }
}

export const addDeckTC = (params: AddDeckParams) => {
  return (dispatch: AppDispatch) => {
    return decksApi.addDeck(params).then(res => dispatch(addDecksAC(res.data)))
  }
}