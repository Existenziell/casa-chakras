import { useRouter } from 'next/router'
import Nav from './Nav'
import Footer from './Footer'
import NextNprogress from 'nextjs-progressbar'
import DarkModeToggle from './DarkModeToggle'

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <NextNprogress
        height={3}
        startPosition={0.3}
        stopDelayMs={100}
        showOnShallow={true}
        color='var(--color-brand)'
        options={{ showSpinner: false }}
      />
      <div className='fixed w-full flex justify-between items-center px-4 pt-4 z-20'>
        <Nav />
        <DarkModeToggle />
      </div>

      <main className='w-full text-center bg-cloth-pattern bg-repeat dark:bg-none dark:bg-brand-dark dark:text-gray-300 min-h-screen'>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout
