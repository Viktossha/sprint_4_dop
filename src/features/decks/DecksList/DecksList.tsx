import s from './DecksList.module.css'
import { useEffect } from 'react'
import axios from 'axios'
import { decksApi, type DeckType, instance } from '../decks-api.ts'
import { useDispatch, useSelector } from 'react-redux'
import type { AppRootState } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'

export const DecksList = () => {

  const decks = useSelector<AppRootState, DeckType[]>(state => state.decksReducer.decks)

  const dispatch = useDispatch()

  useEffect(() => {
    decksApi.getDecks().then(res => dispatch(setDecksAC(res.data.items)))
  }, [])

  return <ul className={s.list}>
    {decks.map(d => <DeckItem deck={d} key={d.id}/>)}
  </ul>
}
