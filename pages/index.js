import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'
import AddToHomeScreen from '../components/AddToHomeScreen'

const Casa = ({ i18n }) => {
  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <header className='flex items-center justify-center h-screen sm:bg-fixed bg-center bg-cover bg-parallax-1'>
        <a href='#anchor' aria-label='Scroll down'>
          <h1 className='px-6 py-4 text-4xl md:text-6xl text-brand bg-brand-dark/80 rounded'>
            {i18n.T1}
          </h1>
        </a>
      </header>

      <div className='max-w-xl m-auto px-4 leading-relaxed my-16' id='anchor'>
        <Image src='/logo.webp' alt='Logo' width={229} height={199} />
        {/* <p>{i18n.T2}</p> */}
        <h2 className='text-6xl my-8'>{i18n.T3}</h2>
        <p className='mt-8'>{i18n.T4}</p>
        <div className='my-8 flex flex-col sm:flex-row items-center justify-center gap-2'>
          <Link href='/retreats'><a className='button inline-block'>{i18n.B1}</a></Link>
          <Link href='/ttc'><a className='button inline-block'>{i18n.B2}</a></Link>
        </div>

        <p className='mt-8 leading-loose'>
          {i18n.T5}{` `}
          <Link href='/about'><a className='link'>More information...</a></Link>
        </p>
      </div>

      <section className='flex items-center justify-center h-screen mb-12 sm:bg-fixed bg-center bg-cover bg-parallax-2'>
        <p className='w-full px-6 py-8 text-white bg-brand-dark/80 rounded flex flex-col sm:flex-row items-center justify-center gap-2'>
          <Link href='/contact'><a className='button inline-block'>{i18n.B3}</a></Link>
          <Link href='/visit'><a className='button inline-block'>{i18n.B4}</a></Link>
        </p>
      </section>

      <div className='flex flex-col items-center justify-center px-6'>
        <AddToHomeScreen />
        {/* <p className='text-lg my-8 max-w-xl mx-auto leading-loose'>{i18n.T6}</p> */}
        <div className='shadow-lg w-1/3 mx-auto my-8'>
          <Image
            src='/miel.jpg'
            alt='Miel'
            className='rounded'
            width={600}
            height={400}
            layout='responsive'
            objectFit='cover'
            placeholder="blur"
            blurDataURL='/miel.jpg'
          />
        </div>
        <p className='mt-8 pb-2'>Casa Chakras | El Cedral | Cozumel | +52 322 140 00 60</p>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  let i18n
  context.locale === 'en' ?
    i18n = langEN.home :
    i18n = langES.home
  return {
    props: { i18n },
  }
}

export default Casa
