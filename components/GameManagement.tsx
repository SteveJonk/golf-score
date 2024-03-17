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
        {playerOptions.map((player) => (
          <Button
            key={player}
            onClick={() => {
              setPlayers(player)
            }}
          >
            {player}
          </Button>
        ))}
      </div>
      <p className="mb-2 text-center">Select Rounds</p>
      <div className="flex justify-center gap-2">
        {roundOptions.map((round) => (
          <Button
            key={round}
            onClick={() => {
              setRounds(round)
            }}
          >
            {round}
          </Button>
        ))}
      </div>
      <hr className="mx-auto my-8 h-px w-3/4 border-0 bg-gray-500" />
    </div>
  )
}
