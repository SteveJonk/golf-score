'use client'

import { PlayerName } from '@/components/PlayerName'
import { PlayerScore } from '@/components/PlayerScore'
import { GameManagement } from '@/components/GameManagement'
import { useScore } from '@/hooks/useScore'
import { Config } from '@/data/score'
import { Providers } from '@/components/Providers'
import { ThemeSwitch } from '@/components/ThemeSwitch'

type HomeViewProps = {
  config: Config
}

export const HomeView = ({ config }: HomeViewProps) => {
  const { score, changeScore, changeName, resetGame, players, rounds, setRounds, setPlayers } =
    useScore(config)
  const roundNumbers = Array.from({ length: rounds }, (_, index) => index + 1)

  return (
    <Providers>
      <div className="h-full pt-8">
        <ThemeSwitch />
        <div className="mx-auto w-full max-w-sm">
          <h1 className="mx-auto mb-8 mt-8 block w-fit border border-white px-5 py-2 text-center text-4xl">
            My Golf Score
          </h1>
          <GameManagement
            players={players}
            rounds={rounds}
            onChangePlayers={(players) => setPlayers(players)}
            onChangeRounds={(rounds) => setRounds(rounds)}
            onResetGame={resetGame}
          />
          <div className="max-w flex items-center justify-start pb-10">
            <div className="mt-2 flex flex-col gap-2 pb-10 pt-14 align-bottom">
              {roundNumbers.map((round) => (
                <div key={round} className="flex h-8 w-8 items-center justify-center">
                  {round}
                </div>
              ))}
            </div>
            <div className="flex">
              {score.slice(0, players).map((player, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <PlayerName
                    name={player.name}
                    onChangeName={(newName) => changeName(index, newName)}
                  />
                  <PlayerScore
                    playerScore={player}
                    rounds={rounds}
                    onChangeScore={({ roundIndex, value }) =>
                      changeScore({ roundIndex, value, playerIndex: index })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Providers>
  )
}
