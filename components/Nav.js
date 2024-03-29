import { useState } from 'react'
import { useRouter } from 'next/router'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { locale } = useRouter()
  const router = useRouter()

  let i18n
  locale === 'es' ?
    i18n = langES.navigation :
    i18n = langEN.navigation

  const urls = [
    { name: i18n.N1, url: '/', title: i18n.N1 },
    { name: i18n.N2, url: '/retreats', title: i18n.N2 },
    { name: i18n.N3, url: '/ttc', title: i18n.N3 },
    { name: i18n.N4, url: '/about', title: i18n.N4 },
    // { name: i18n.N5, url: '/visit', title: i18n.N5 },
    { name: i18n.N6, url: '/contact', title: i18n.N6 },
  ]

  const intercept = (e) => {
    e.preventDefault()
    setIsOpen(false)
    router.push(e.target.href)
  }

  return (
    <nav>
      {/* Mobile menu */}
      {isOpen &&
        <ul className='mobile-menu left-0 right-0 top-0 bottom-0 pt-20 bg-white z-20 dark:bg-brand-dark dark:text-gray-300 absolute h-screen w-screen'>
          {urls.map(url => (
            <li key={url.name}>
              <a
                href={url.url}
                onClick={intercept}
                className={`${router.pathname === url.url && 'active-nav shadow-sm'} 
                                w-full block text-2xl md:text-4xl text-center leading-loose px-8 py-2 md:py-8 
                                hover:bg-brand hover:text-white transition-all`}>
                {url.name}
              </a>
            </li>
          ))}
        </ul>
      }

      {/* Mobile Hamburger Button */}
      <button className='mobile-menu-button outline-none bg-brand/80 dark:bg-brand-dark/80 p-1 rounded w-[50px] h-[50px] flex items-center justify-center' onClick={() => setIsOpen(!isOpen)} aria-label='Open Mobile Navigation'>
        {!isOpen ?
          <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 text-brand-dark dark:text-brand hover:text-white dark:hover:text-white' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
            <path d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
          :
          <svg xmlns='http://www.w3.org/2000/svg' className='absolute top-4 left-4 h-12 w-12 z-20 text-brand-dark dark:text-brand hover:text-white dark:hover:text-white bg-brand/80 dark:bg-brand-dark/80 p-1 rounded w-[50px] h-[50px] flex items-center justify-center transition-all' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        }
      </button>

    </nav>
  )
}

export default Nav
