import Link from 'next/link'
import Head from 'next/head'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'
import Quote from '../components/Quote'
import Blob from '../components/Blob'

const About = ({ i18n }) => {
  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <div className='px-4 md:px-8 py-24'>
        <h1 className='text-4xl md:text-6xl my-4'>{i18n.T1}</h1>
        <Quote text={i18n.T2} classes='mx-auto w-max mt-12 mb-16' />

        <div className='hidden md:block'>
          <Blob />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <img src='/about/1.jpg' alt='about1' className='shadow-lg rounded' />
          <img src='/about/2.jpg' alt='about2' className='shadow-lg rounded' />
          <img src='/about/3.jpg' alt='about3' className='shadow-lg rounded' />
          <img src='/about/4.jpg' alt='about4' className='shadow-lg rounded' />
          <img src='/about/5.jpg' alt='about5' className='shadow-lg rounded' />
          <img src='/about/6.jpg' alt='about6' className='shadow-lg rounded' />
          <img src='/about/7.jpg' alt='about7' className='shadow-lg rounded' />
          <img src='/about/8.jpg' alt='about8' className='shadow-lg rounded' />
          <img src='/about/9.jpg' alt='about9' className='shadow-lg rounded' />
          <img src='/about/10.jpg' alt='about10' className='shadow-lg rounded' />
          <img src='/about/11.jpg' alt='about11' className='shadow-lg rounded' />
          <img src='/about/12.jpg' alt='about12' className='shadow-lg rounded' />
          <img src='/about/13.jpg' alt='about13' className='shadow-lg rounded' />
          <img src='/about/14.jpg' alt='about14' className='shadow-lg rounded' />
          <img src='/about/15.jpg' alt='about15' className='shadow-lg rounded' />
          <img src='/about/16.jpg' alt='about16' className='shadow-lg rounded' />
        </div>
      </div>
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
