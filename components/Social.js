import Link from 'next/link'
import { socialLinks } from '../lib/socialLinks'

const Social = () => {
  return (
    <ul className='flex gap-4 my-8 justify-center md:justify-end'>
      {socialLinks.map(l => {
        const { name, link, icon } = l
        return (
          <li className='hover:text-brand dark:hover:scale-[103%] transition-all text-brand-dark dark:text-brand h-12 w-12' key={name}>
            <Link href={link}>
              <a target='_blank' rel='noopener noreferrer nofollow'>
                {icon}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Social
