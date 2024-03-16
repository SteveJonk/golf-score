export type Score = {
  name: string
  score: number[]
}

export const startScore: Score[] = [
  { name: 'player 1', score: Array.from({ length: 9 }, () => 0) },
  { name: 'player 2', score: Array.from({ length: 9 }, () => 0) },
  { name: 'player 3', score: Array.from({ length: 9 }, () => 0) },
  { name: 'player 4', score: Array.from({ length: 9 }, () => 0) },
]
