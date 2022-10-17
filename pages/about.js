import Link from 'next/link'
import Head from 'next/head'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'
import Quote from '../components/Quote'
import Image from 'next/image'
import { useState } from 'react'

const About = ({ i18n }) => {
  const [showFullscreen, setShowFullscreen] = useState(false)
  const [selectedImage, setSelectedImage] = useState()

  const maximize = (image) => {
    setShowFullscreen(true)
    setSelectedImage(image)
  }
  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <div className='px-4 md:px-8 py-24'>
        <h1 className='text-4xl md:text-6xl my-4'>{i18n.T1}</h1>
        <Quote text={i18n.T2} classes='mx-auto w-max mt-8 mb-12' />

        <div className='mb-12 max-w-2xl mx-auto leading-relaxed text-xl text-left'>
          <p>
            Casa Chakras is the perfect place to spend a little time away from it all, giving you the ability to focus and return to a relaxed baseline.
            We are 2 professional Yoga teachers welcoming you and offering a wide variety of Yoga styles and experiences.
            Together, we have a combined time of teaching of over 10 years and are very passionate about teaching and giving back to the community.
          </p>
          <p className='mt-6'>Available Yoga Styles:<br /> Hatha, Vinyasa, Kundalini, Ashtanga, Yin.</p>
          <p className='mt-6'>We speak the following languages:<br /> English, Español, Português, Français, Deutsch.</p>
          <Link href='/visit'><a className='link mt-6 inline-block'>Find us on map</a></Link>
        </div>

        <h2 className='mb-4'>Please find a few impressions of Casa Chakras beneath:</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center justify-center'>
          {[...Array(16)].map((e, i) => (
            <div className='shadow-xl hover:scale-105 transition-all duration-500 hover:cursor-pointer' key={i} onClick={() => maximize(`/about/${i + 1}.jpg`)}>
              <Image
                src={`/about/${i + 1}.jpg`}
                alt={`About CasaChakras ${i + 1}`}
                className='rounded'
                width={500}
                height={500}
                layout='responsive'
                objectFit='cover'
                placeholder="blur"
                blurDataURL={`/about/${i + 1}.jpg`}
              />
            </div>
          ))}
        </div>
      </div>

      {showFullscreen &&
        <div onClick={() => setShowFullscreen(false)} className='fixed top-0 bottom-0 left-0 right-0 bg-black/20 backdrop-blur-xl transition-all'>
          <div className='p-8 md:p-16 w-full h-full' >
            <div className='relative w-full h-full hover:cursor-pointer'>
              <Image
                src={selectedImage}
                alt={'About'}
                className='rounded'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export async function getStaticProps(context) {
  let i18n
  context.locale === 'en' ?
    i18n = langEN.about :
    i18n = langES.about
  return {
    props: { i18n },
  }
}

export default About
