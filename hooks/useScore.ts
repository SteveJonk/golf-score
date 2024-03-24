'use client'

import { useEffect, useState } from 'react'
import { Config, Score, getStartScore } from '@/data/score'
import Cookie from 'js-cookie'

type ChangeScore = {
  playerIndex: number
  roundIndex: number
  value: number
}

export const useScore = (config: Config | undefined) => {
  const [players, setPlayers] = useState(config?.players || 4)
  const [rounds, setRounds] = useState(config?.rounds || 9)
  const [score, setScore] = useState(config?.score || getStartScore())
  useEffect(() => {
    const recalculateScore = (score: Score[]) => {
      return score.map((player) => {
        player.total = player.score.slice(0, rounds).reduce((acc, score) => acc + score, 0)
        return player
      })
    }
    setScore((prevScore) => recalculateScore(prevScore))
  }, [rounds])

  useEffect(() => {
    try {
      const oldValues = JSON.parse(Cookie.get('golf_score'))
      Cookie.set('golf_score', JSON.stringify({ ...oldValues, rounds, players }), { expires: 365 })
    } catch (e) {
      // dont act on error
    }
  }, [rounds, players])

  const changeScore = (newScore: ChangeScore) => {
    const newScoreArray = [...score]
    newScoreArray[newScore.playerIndex].score[newScore.roundIndex] = newScore.value
    newScoreArray[newScore.playerIndex].total = newScoreArray[newScore.playerIndex].score
      .slice(0, rounds)
      .reduce((acc: number, score: number) => acc + score, 0)
    setScore(newScoreArray)
    Cookie.set('golf_score', JSON.stringify({ score: newScoreArray, rounds, players }), {
      expires: 365,
    })
  }

  const changeName = (playerIndex: number, newName: string) => {
    const newScoreArray = [...score]
    newScoreArray[playerIndex].name = newName
    setScore(newScoreArray)
    Cookie.set('golf_score', JSON.stringify({ score: newScoreArray, rounds, players }), {
      expires: 365,
    })
  }

  const resetGame = () => {
    Cookie.remove('golf_score')
    setScore(getStartScore())
  }

  return { score, changeScore, changeName, resetGame, players, setPlayers, rounds, setRounds }
}
