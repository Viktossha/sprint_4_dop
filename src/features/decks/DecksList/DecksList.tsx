import s from './DecksList.module.css'
import { useEffect } from 'react'
import axios from 'axios'
import { decksApi, instance } from '../decks-api.ts'

export const DecksList = () => {

  useEffect(() => {
    decksApi.getDecks().then(res => console.log(res.data))
  }, [])

  return <ul className={s.list}></ul>
}
