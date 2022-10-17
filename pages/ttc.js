import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
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
        <p>Are you ready for the next step? We might just have exactly the right program for you!</p>
        <p>A teacher training can be quite an intense endeavour, but we are here to support you and help you find the right answers.</p>
        <p>Together, we have a combined time of teaching of over 10 years and are very passionate about teaching and giving back to the community.</p>
        <p className='mt-4'>During our course you will come in contact with many different styles and philosophies of Yoga - in order to give a wide understanding and good base for further specialisations.</p>
        <p>We include styles such as Hatha, Kundalini, Ashtanga, Vinyasa, Yin and Tantra...</p>

        <h2 className='text-2xl mt-12 mb-6 text-left'>Teachers:</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
          <Image
            src='/ttc/kundalini.jpg'
            alt='Kundalini Yoga'
            className='rounded'
            width={851}
            height={852}
            objectFit='cover'
            placeholder="blur"
            blurDataURL='/ttc/kundalini.jpg'
          />
          <div className='text-2xl md:text-left'>
            <p className='text-6xl border-b border-brand'>Miel</p>
            <h2 className='mt-8 text-base'>Certificates:</h2>
            <div className='flex gap-4 mt-2'>
              {[...Array(5)].map((e, i) => (
                <div key={i}>
                  <Image
                    src={`/ttc/diploma${i + 1}.jpg`}
                    alt={`Diploma ${i + 1}`}
                    className='rounded-sm'
                    width={600}
                    height={300}
                    // layout='responsive'
                    objectFit='cover'
                    placeholder="blur"
                    blurDataURL={`/ttc/diploma${i + 1}.jpg`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
          <div className='text-2xl'>
            <p className='text-6xl border-b border-brand md:text-right'>Christof</p>
            <h2 className='mt-8 text-base text-left'>Certificates:</h2>
            <div className='flex gap-4 mt-2'>
              <Image
                src='/ttc/ryt-200.png'
                alt='RYT-200'
                className='rounded-sm'
                width={100}
                height={100}
                objectFit='cover'
                placeholder="blur"
                blurDataURL='/ttc/ryt-200.png'
              />
              <Image
                src='/ttc/ryt-500.png'
                alt='RYT-500'
                className='rounded-sm'
                width={100}
                height={100}
                objectFit='cover'
                placeholder="blur"
                blurDataURL='/ttc/ryt-500.png'
              />
            </div>
          </div>
          <Image
            src='/ttc/ashtanga.jpg'
            alt='Ashtanga Yoga'
            className='rounded'
            width={1074}
            height={1074}
            objectFit='cover'
            placeholder="blur"
            blurDataURL='/ttc/ashtanga.jpg'
          />
        </div>

        {/* <div>
          New content...
        </div> */}

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
