import { Score } from '@/data/score'

export const PlayerScore = ({ score }: Score) => (
  <div className="flex flex-col gap-2">
    {score.map((point, index) => (
      <input
        key={`${score}-${index}`}
        type="number"
        className="flex h-8 w-8 items-center justify-center border border-white bg-gray-900 p-0 text-center"
        defaultValue={point}
      />
    ))}
  </div>
)
