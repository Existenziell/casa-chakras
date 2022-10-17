import { useEffect, useState } from 'react'
import { CircleLoader } from 'react-spinners'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'

const Retreats = ({ i18n }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const iframes = document.getElementsByTagName('iframe')
    if (iframes) {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <div className='px-4 md:px-8 py-24'>
        <h1 className="text-4xl md:text-6xl mb-12 mt-4">{i18n.T1}</h1>
        <div className='flex items-center justify-center flex-col md:flex-row gap-8 mb-16'>
          <div className='shadow-lg w-1/2'>
            <Image
              src='/peace.jpg'
              alt='Peace'
              className='rounded'
              width={1000}
              height={668}
              layout='responsive'
              placeholder="blur"
              blurDataURL='/peace.jpg'
            />
          </div>

          <div className='leading-normal text-lg md:text-left'>
            <p className='mb-4'>{i18n.T2}</p>
            <Link href="/contact">
              <a className="link">
                {i18n.T3}
              </a>
            </Link>
            {i18n.T4}
          </div>
        </div>

        {loading ?
          <div className='flex flex-col items-center gap-2 text-brand'>
            <CircleLoader color={'var(--color-brand)'} size={100} />
            <p>Loading ...</p>
          </div>
          :
          <div className='flex flex-col items-center justify-center h-full w-full'>
            <iframe title="retreat-1" className="w-full min-h-screen mb-16 border-b-2 pb-16" src="https://www.bookyogaretreats.com/yoga-kundalini-teacher-training-in-cozumel/4-day-yoga-snorkeling-and-horseback-riding-retreat-in-cozumel"></iframe>
            <iframe title="retreat-2" className="w-full min-h-screen mb-16 border-b-2 pb-16" src="https://www.tripaneer.com/yoga-kundalini-teacher-training-in-cozumel/14-days-yoga-therapy-and-pranachikitza-retreat-in-cozumel"></iframe>
            <iframe title="retreat-3" className="w-full min-h-screen mb-16 border-b-2 pb-16" src="https://www.tripaneer.com/yoga-kundalini-teacher-training-in-cozumel/4-day-yoga-retreat-with-live-music-and-energetic-herbalism-in-the-island-of-cozumel?refr_s=bmr&path=/yoga-kundalini-teacher-training-in-cozumel/4-day-yoga-retreat-with-live-music-and-energetic-herbalism-in-the-island-of-cozumel"></iframe>
            <iframe title="retreat-4" className="w-full min-h-screen mb-16 border-b-2 pb-16" src=" https://www.bookyogaretreats.com/yoga-kundalini-teacher-training-in-cozumel/14-day-kundalini-tantra-yoga-retreat-in-cozumel"></iframe>
          </div>
        }
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  let i18n
  context.locale === 'en' ?
    i18n = langEN.retreats :
    i18n = langES.retreats
  return {
    props: { i18n },
  }
}

export default Retreats
