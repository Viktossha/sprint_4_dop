import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const decks = useAppSelector(selectDecks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [dispatch])

  return {
    decks
  }
}