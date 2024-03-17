import { Button } from '@/components/Button'

type GameManagementProps = {
  players: number
  rounds: number
  onChangePlayers: (players: number) => void
  onChangeRounds: (rounds: number) => void
  onResetGame: () => void
}

const playerOptions = [1, 2, 3, 4]
const roundOptions = [9, 18]

export const GameManagement = ({
  players,
  rounds,
  onChangePlayers,
  onChangeRounds,
  onResetGame,
}: GameManagementProps) => {
  const handleResetGame = () => {
    window.confirm('Are you sure you want to start a new round?') && onResetGame()
  }

  return (
    <div>
      <p className="mb-2 text-center">Select Players</p>
      <div className="mb-4 flex justify-center gap-2">
        {playerOptions.map((playerOption) => (
          <Button
            key={playerOption}
            onClick={() => {
              onChangePlayers(playerOption)
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
              onChangeRounds(roundOption)
            }}
            selected={roundOption === rounds}
          >
            {roundOption}
          </Button>
        ))}
      </div>
      <Button className="mx-auto mt-6 w-fit px-4" onClick={handleResetGame}>
        Start New Round
      </Button>
      <hr className="mx-auto my-8 h-px w-3/4 border-0 bg-gray-500" />
    </div>
  )
}
