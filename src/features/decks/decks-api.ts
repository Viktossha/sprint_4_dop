import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<fetchDecksResponse>('/v2/decks')
  },
  addDeck(params: AddDeckParams) {
    return instance.post('v1/decks', params)
  }
}

export type AddDeckParams = {
  name: string
}

type fetchDecksResponse = {
  items: Array<DeckType>
  pagination: PaginationType
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
  updated: string
  cardsCount: number
}

export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
