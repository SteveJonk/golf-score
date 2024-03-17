'use client'

import { useEffect, useState } from 'react'
import { Score, getStartScore } from '@/data/score'
import Cookie from 'js-cookie'

type ChangeScore = {
  playerIndex: number
  roundIndex: number
  value: number
}

export const useScore = (savedScore: Score[]) => {
  const [players, setPlayers] = useState(4)
  const [rounds, setRounds] = useState(9)
  const [score, setScore] = useState(savedScore || getStartScore())

  useEffect(() => {
    const recalculateScore = (score: Score[]) => {
      return score.map((player) => {
        player.total = player.score.slice(0, rounds).reduce((acc, score) => acc + score, 0)
        return player
      })
    }
    setScore((prevScore) => recalculateScore(prevScore))
  }, [rounds])

  const changeScore = (newScore: ChangeScore) => {
    const newScoreArray = [...score]
    newScoreArray[newScore.playerIndex].score[newScore.roundIndex] = newScore.value
    newScoreArray[newScore.playerIndex].total = newScoreArray[newScore.playerIndex].score
      .slice(0, rounds)
      .reduce((acc: number, score: number) => acc + score, 0)
    setScore(newScoreArray)
    Cookie.set('golf_score', JSON.stringify(newScoreArray))
  }

  const changeName = (playerIndex: number, newName: string) => {
    const newScoreArray = [...score]
    newScoreArray[playerIndex].name = newName
    setScore(newScoreArray)
    Cookie.set('golf_score', JSON.stringify(newScoreArray))
  }

  const resetGame = () => {
    Cookie.remove('golf_score')
    setScore(getStartScore())
  }

  return { score, changeScore, changeName, resetGame, players, setPlayers, rounds, setRounds }
}
