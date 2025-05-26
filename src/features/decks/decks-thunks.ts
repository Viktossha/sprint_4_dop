import type { AppDispatch } from '../../app/store.ts'
import { decksApi } from './decks-api.ts'
import { addDecksAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => {
  return (dispatch: AppDispatch) => {
    decksApi.getDecks().then(res => dispatch(setDecksAC(res.data.items)))
  }
}

export const addDeckTC = (name: string) => {
  const newDeck = {
    isFavorite: true,
    author: {
      id: '1111111',
      name: 'Vika'
    },
    id: 'rn89thher-48t-48h6',
    userId: '5445',
    name: name,
    isPrivate: false,
    cover: '',
    created: '111',
    updated: '111',
    cardsCount: 3,
  }
  return (dispatch: AppDispatch) => {
    return decksApi.addDeck(name).then(res => dispatch(addDecksAC(newDeck)))
  }
}