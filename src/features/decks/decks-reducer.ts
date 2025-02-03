import type { DeckType } from './decks-api.ts'

const initialState = {
  decks: [] as DeckType[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case "SET-DECKS":
      return { ...state, decks: action.payload.decks }
    default:
      return state
  }
}

export const setDecksAC = (decks: DeckType[]) => {
  return {type: 'SET-DECKS', payload: {decks}} as const
}

type setDecksType = ReturnType<typeof setDecksAC>

type DecksActions = setDecksType
