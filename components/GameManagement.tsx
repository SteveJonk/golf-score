import { Button } from '@/components/Button'

type GameManagementProps = {
  players: number
  rounds: number
  setPlayers: (players: number) => void
  setRounds: (rounds: number) => void
}

const playerOptions = [1, 2, 3, 4]
const roundOptions = [9, 18]

export const GameManagement = ({ players, rounds, setPlayers, setRounds }: GameManagementProps) => {
  return (
    <div>
      <p className="mb-2 text-center">Select Players</p>
      <div className="mb-4 flex justify-center gap-2">
        {playerOptions.map((playerOption) => (
          <Button
            key={playerOption}
            onClick={() => {
              setPlayers(playerOption)
            }}
            selected={playerOption === players}
          >
            {playerOption}
          </Button>
        ))}
      </div>
      <p className="mb-2 text-center">Select Rounds</p>
      <div className="flex justify-center gap-2">
        {roundOptions.map((roundOption) => (
          <Button
            key={roundOption}
            onClick={() => {
              setRounds(roundOption)
            }}
            selected={roundOption === rounds}
          >
            {roundOption}
          </Button>
        ))}
      </div>
      <hr className="mx-auto my-8 h-px w-3/4 border-0 bg-gray-500" />
    </div>
  )
}
