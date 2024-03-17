import { Score } from '@/data/score'
import { HomeView } from '@/views/HomeView'
import { cookies } from 'next/headers'

const getSavedScore = (): Score[] => {
  return JSON.parse(cookies().get('golf_score')?.value || null)
}

export default function Home() {
  const savedScore = getSavedScore()

  return (
    <div className="mx-auto w-full max-w-sm">
      <HomeView savedScore={savedScore} />
    </div>
  )
}
