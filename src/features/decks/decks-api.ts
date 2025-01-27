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

type DeckType = {
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
