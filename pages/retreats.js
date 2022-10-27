import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'
import { retreats } from '../lib/retreats'

const Retreats = ({ i18n }) => {
  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <div className='px-4 md:px-8 py-24'>
        <h1 className="text-4xl md:text-6xl mb-12 mt-4">{i18n.T1}</h1>
        <div className='flex items-center justify-center flex-col md:flex-row gap-8 mb-16'>
          <div className='shadow-lg w-full md:w-1/2'>
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

        <ul className='flex flex-col items-start justify-start text-left gap-8'>
          {retreats.map((retreat, idx) => (
            <li key={retreat.title} className='bg-white/80 dark:bg-gray-800 rounded shadow px-8 py-6 mb-8 w-full'>
              <h2 className='text-2xl md:text-4xl mb-6'>{retreat.title}</h2>
              <div className='relative flex flex-col md:flex-row gap-8 w-full'>
                <div className='md:w-1/2 nextimg'>
                  <Image src={`/retreats/retreat${idx + 1}.webp`}
                    alt={`Retreat${idx + 1}`}
                    width={653}
                    height={490}
                    className='rounded'
                  />
                </div>
                {retreat.promo ?
                  <div className='absolute top-1 left-1 bg-red-600 px-2 py-1 rounded text-white text-xs'>
                    5% off
                  </div>
                  : null
                }
                <div className='md:w-1/2'>
                  <ul className='list-disc'>
                    <li className='font-bold text-xl list-none'>Highlights:</li>
                    <li className='mt-4 ml-4'>Bilingual retreat</li>
                    <li className='ml-4'>Integral yoga classes daily</li>
                    <li className='ml-4'>Sound meditation sessions daily</li>
                    <li className='ml-4'>Horseback riding in the cenotes and caves</li>
                    <li className='ml-4'>Vegetarian/vegan breakfast and dinner</li>
                    <li className='ml-4'>Reef snorkeling excursion</li>
                    <li className='ml-4'>3 nights accommodation</li>
                  </ul>
                  <div className='max-w-max mt-12 mb-4'>
                    <Link href='/contact'>
                      <a className='button button-secondary mr-2'>
                        Send Inquiry
                      </a>
                    </Link>
                    <a className='button' href={retreat.link} target='_blank' rel='noopener noreferrer nofollow'>
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
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
