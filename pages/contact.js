import { useState } from 'react'
import { CircleLoader } from 'react-spinners'
import Router from 'next/router'
import Head from 'next/head'
import Social from '../components/Social'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'
import Image from 'next/image'
import MapComponent from '../components/Map'

const Contact = ({ i18n }) => {
  const [formData, setFormData] = useState()
  const [sending, setSending] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const translations = i18n.contact

  function setData(e) {
    const { name, value } = e.target
    setFormData({ ...formData, ...{ [name]: value } })
  }

  const submitForm = async e => {
    e.preventDefault()
    setSending(true)
    const data = { ...formData }

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      res.ok ?
        Router.push('/success')
        :
        setErrorMsg(`Sorry, an error occured: ${res.statusText}`)
    } catch (error) {
      setErrorMsg('Sorry, an error occured. Have you tried turning it off and on again?')
    }
  }

  return (
    <>
      <Head>
        <title>{translations.title}</title>
        <meta name='description' content={translations.desc} />
      </Head>

      <div className='flex flex-col items-center justify-center px-4 md:px-8 pt-24 pb-10 lg:w-2/3 lg:mx-auto'>
        <h1 className='text-4xl md:text-6xl mb-10'>{translations.T1}</h1>
        <div className='md:flex items-center gap-8 md:text-right md:mb-8'>
          <div className='md:w-1/2'>
            <p className='mx-auto leading-relaxed'>{translations.T2}</p>
            <Social />
          </div>
          <div className='hidden md:block md:w-1/2 shadow rounded'>
            <Image
              src='/contact.jpg'
              alt={translations.T1}
              className='rounded'
              width={1000}
              height={668}
              layout='responsive'
              objectFit='cover'
              placeholder="blur"
              blurDataURL='/contact.jpg'
            />
          </div>
        </div>

        <div className='z-0 px-4 pt-8 pb-0 sm:px-12 shadow w-full bg-brand-dark rounded-lg backdrop-blur-md text-white'>
          <form onSubmit={submitForm}>
            <div className='relative mb-8 text-white'>
              <input
                id='name' name='name' type='text'
                onChange={setData} required disabled={sending}
                className='peer h-10 w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4 border-none' placeholder={translations.T4}
              />
              <label htmlFor='name'
                className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-300 peer-focus:text-sm'>{translations.T4}</label>
            </div>
            <div className='relative mb-8'>
              <input
                id='email' type='email' name='email'
                onChange={setData} required disabled={sending}
                className='peer h-10 w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4 border-none' placeholder={translations.T5}
              />
              <label htmlFor='email'
                className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-300 peer-focus:text-sm'>{translations.T5}</label>
            </div>
            <div className='relative'>
              <textarea
                id='message' name='message'
                onChange={setData} rows='10' required disabled={sending}
                className='peer h-full w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4 border-none py-4' placeholder={translations.T6}>
              </textarea>
              <label htmlFor='message'
                className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-300 peer-focus:text-sm'>{translations.T6}</label>
            </div>

            {errorMsg ?
              <div className='text-left bg-brand text-white p-4'>
                {errorMsg}
              </div>
              :
              sending ?
                <div className='my-8 h-16 mr-16'>
                  <CircleLoader color={'white'} size={50} />
                </div>
                :
                <input type='submit' className='button my-4' aria-label='Send Contact Form' value={translations.T7}></input>
            }
          </form>
        </div>
      </div>
      <Image src='/logo.webp' alt='Logo' width={229} height={199} />
      <h2 className='text-xl mb-2 mt-6'>Find us on the map</h2>
      <MapComponent i18n={i18n} />
    </>
  )
}

export async function getStaticProps(context) {
  let i18n
  context.locale === 'en' ?
    i18n = langEN :
    i18n = langES
  return {
    props: { i18n },
  }
}

export default Contact
