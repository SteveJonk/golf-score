'use client'

import { PlayerName } from '@/components/PlayerName'
import { PlayerScore } from '@/components/PlayerScore'
import { startScore } from '@/data/score'
import { useState } from 'react'

export default function Home() {
  const [rounds, setRounds] = useState(9)
  const [score, setScore] = useState(startScore)
  const roundNumbers = Array.from({ length: rounds }, (_, index) => index + 1)

  return (
    <>
      <h1 className="mx-auto mb-8 mt-8 block w-fit border border-white px-5 py-2 text-center text-4xl">
        My Golf Score
      </h1>

      <div className="max-w flex items-center justify-center">
        <div className="mt-2 flex flex-col gap-2 pt-14 align-bottom">
          {roundNumbers.map((round) => (
            <div key={round} className="flex h-8 w-8 items-center justify-center">
              {round}
            </div>
          ))}
        </div>
        <div className="flex">
          {score.map((player, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <PlayerName name={player.name} />
              <PlayerScore name={player.name} score={player.score} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
