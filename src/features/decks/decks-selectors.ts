import { useSelector } from 'react-redux'
import type { AppRootState } from '../../app/store.ts'
import type { DeckType } from './decks-api.ts'

export const selectDecks = (state: AppRootState): DeckType[] => state.decksReducer.decks