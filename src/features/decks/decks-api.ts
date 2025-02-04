import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<fetchDecks>('/v2/decks')
  },
  addDeck(name: string) {
    return instance.post('v1/decks', { name })
  }
}

type fetchDecks = {
  items: Array<DeckType>
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalItems: number
    totalPages: number
  }
}

export type DeckType = {
  isFavorite: boolean
  author: {
    id: string
    name: string
  },
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  update: string
  cardsCount: number
}
