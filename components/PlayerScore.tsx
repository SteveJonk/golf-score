import { Score } from '@/data/score'

type PlayerScoreProps = {
  playerScore: Score
  rounds: number
}

export const PlayerScore = ({ playerScore, rounds }: PlayerScoreProps) => (
  <div className="flex flex-col gap-2">
    {playerScore.score.slice(0, rounds).map((point, index) => (
      <input
        key={`${playerScore.name}-${index}`}
        type="number"
        className="flex h-8 w-8 items-center justify-center border border-white bg-gray-900 p-0 text-center"
        defaultValue={point}
        onFocus={(event) => {
          event.target.select()
        }}
      />
    ))}
  </div>
)
