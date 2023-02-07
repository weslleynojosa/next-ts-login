import { useAppSelector } from '@/app/hooks'
import GlobalStyles from '@/components/styles/Global.styled'
import { Quicksand } from '@next/font/google'
import Auth from './Auth'
import Courses from './Courses'

const quickSand = Quicksand({ subsets: ['latin'] })

export default function Home() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  return (
    <>
      <GlobalStyles />
      { !isLoggedIn && <Auth />}
      { isLoggedIn && <Courses />}
    </>
  )
}
