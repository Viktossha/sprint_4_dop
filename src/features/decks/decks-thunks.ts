import type { AppDispatch } from '../../app/store.ts'
import { decksApi } from './decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => {
  return (dispatch: AppDispatch) => {
    decksApi.getDecks().then(res => dispatch(setDecksAC(res.data.items)))
  }
}