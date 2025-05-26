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
    case 'ADD-DECKS':
      return { ...state, decks: [action.payload.deck, ...state.decks]}
    default:
      return state
  }
}

export const setDecksAC = (decks: DeckType[]) => {
  return {type: 'SET-DECKS', payload: {decks}} as const
}

export const addDecksAC = (deck: DeckType) => {
  return {type: 'ADD-DECKS', payload: {deck}} as const
}

type setDecksActionType = ReturnType<typeof setDecksAC>
type addDecksActionType = ReturnType<typeof addDecksAC>

type DecksActions = setDecksActionType | addDecksActionType
