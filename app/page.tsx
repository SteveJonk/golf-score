import { Config } from '@/data/score'
import { HomeView } from '@/views/HomeView'
import { cookies } from 'next/headers'

const getSavedValues = (): Config => {
  return JSON.parse(cookies().get('golf_score')?.value || null)
}

export default function Home() {
  const config = getSavedValues()
  return <HomeView config={config} />
}
