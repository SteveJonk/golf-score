export type Score = {
  name: string
  score: number[]
  total: number
}

export const getStartScore = () => [
  { name: 'player 1', score: Array.from({ length: 18 }, () => 0), total: 0 },
  { name: 'player 2', score: Array.from({ length: 18 }, () => 0), total: 0 },
  { name: 'player 3', score: Array.from({ length: 18 }, () => 0), total: 0 },
  { name: 'player 4', score: Array.from({ length: 18 }, () => 0), total: 0 },
]
