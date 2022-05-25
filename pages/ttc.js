import Link from 'next/link'
import Head from 'next/head'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'

const TTC = ({ i18n }) => {
  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <div className='px-4 md:px-8 py-24'>
        <h1 className="text-4xl md:text-6xl mt-4 mb-2">{i18n.T1}</h1>
        <h2 className="text-lg mb-8">&#8220; {i18n.T1a} &#8221;</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-12'>
          <img src='/ttc/ashtanga.jpg' alt='Ashtanga Yoga' className='rounded' />
          <img src='/ttc/kundalini.jpg' alt='Kundalini Yoga' className='rounded' />
        </div>
        <p>We offer teacher training courses for the following styles:</p>
        <ul className='text-xl mx-auto w-max my-8 flex flex-col gap-2'>
          <li>{i18n.T2}</li>
          <li>{i18n.T3}</li>
          <li>{i18n.T4}</li>
          <li>{i18n.T5}</li>
        </ul>

        <div className='bg-white rounded shadow w-full py-8 flex flex-wrap items-center justify-center gap-4 mb-12'>
          <img src='/ttc/ryt-200.png' alt='RYT-200' className='w-52' />
          <img src='/ttc/diploma1.jpg' alt='Diploma 1' className='w-52' />
          <img src='/ttc/diploma2.jpg' alt='Diploma 2' className='w-52' />
          <img src='/ttc/diploma3.jpg' alt='Diploma 3' className='w-52' />
          <img src='/ttc/diploma4.jpg' alt='Diploma 4' className='w-52' />
          <img src='/ttc/diploma5.jpg' alt='Diploma 5' className='w-52' />
          <img src='/ttc/ryt-500.png' alt='RYT-500' className='w-52' />
        </div>

        <Link href="/contact">
          <a className="link">
            Contact us
          </a>
        </Link>
        {` `}for more information.
      </div>
    </>

  )
}


export async function getStaticProps(context) {
  let i18n
  context.locale === 'en' ?
    i18n = langEN.ttc :
    i18n = langES.ttc
  return {
    props: { i18n },
  }
}

export default TTC
