import { Score } from '@/data/score'

type ChangeScore = {
  roundIndex: number
  value: number
}

type PlayerScoreProps = {
  playerScore: Score
  rounds: number
  onChangeScore: (score: ChangeScore) => void
}

export const PlayerScore = ({ playerScore, rounds, onChangeScore }: PlayerScoreProps) => (
  <div className="flex flex-col gap-2">
    {playerScore.score.slice(0, rounds).map((point, index) => (
      <input
        key={`${playerScore.name}-${index}`}
        type="number"
        className="flex h-8 w-8 items-center justify-center border border-white bg-gray-900 p-0 text-center"
        value={point}
        onFocus={(event) => {
          event.target.select()
        }}
        onChange={(event) => {
          onChangeScore({
            roundIndex: index,
            value: parseInt(event.target.value, 10),
          })
        }}
      />
    ))}
    <div className="flex h-8 w-8 items-center justify-center text-white">
      {playerScore.total.toString()}
    </div>
  </div>
)
