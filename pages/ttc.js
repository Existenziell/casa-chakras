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

      <div className='px-4 md:px-8 py-24 text-left'>
        <h1 className="text-4xl md:text-6xl mt-4 mb-2 text-center">{i18n.T1}</h1>
        <h2 className="text-lg mb-8 text-center">&#8220; {i18n.T1a} &#8221;</h2>
        <p>Are you ready for the next step? We might just have exactly the right program for you!</p>
        <p>A teacher training can be quite an intense endeavour, but we are here to support you and help you find the right answers.</p>
        <p>Together, we have a combined time of teaching of over 10 years and are very passionate about teaching and giving back to the community.</p>
        <p className='mt-4'>During our course you will come in contact with many different styles and philosophies of Yoga - in order to give a wide understanding and good base for further specialisations.</p>
        {/* <p>We include styles such as Hatha, Kundalini, Ashtanga, Vinyasa, Yin and Tantra...</p> */}

        <h2 className='mb-4 text-xl text-brand-dark dark:text-brand mt-16'>Upcoming trainings:</h2>

        <div className='text-left bg-white dark:bg-black rounded p-6'>
          <p className='text-2xl mb-4 bg-gray-100 p-4 rounded-sm max-w-max'>14 Days 200-Hour Introduction to Kundalini Yoga Training</p>

          <div className='max-w-max my-6'>
            <Link href='/contact'>
              <a className='button button-secondary mr-2'>
                Send Inquiry
              </a>
            </Link>
            <a className='button' href='https://www.bookyogaretreats.com/yoga-kundalini-teacher-training-in-cozumel/14-days-200-hour-introduccion-kundalini-yoga-training-on-the-island-of-cozumel#reviews' target='_blank' rel='noopener noreferrer nofollow'>
              Book now
            </a>
          </div>

          <p className='italic mb-4'>Yoga Training in Mexico</p>
          <p className='mb-4'>Kundalini YTT is a spiral consciousness that rises to liberation, enlightenment, and union. It uses the science of the chakras (Vydia Chakra) to understand the dimensional planes. The techniques are used to reconnect the individual with their natural state of health, contentment, emotional serenity, supra mind, and supra consciousness. The ideal style for daily yoga classes and for raising your consciousness.</p>
          <p className='text-sm'>Instructions will be offered in English and/or Spanish.</p>

          <h2 className='mt-8 mb-2 text-lg'>Highlights:</h2>
          <ul className='bg-gray-100 p-4 list-disc text-sm pl-8 leading-normal'>
            <li>Daily Kundalini yoga practice and theory classes</li>
            <li>Group dynamics by Chakras and elements</li>
            <li>Ceremonies, sound healing sessions, temazcal, crystal, and bowl meditation</li>
            <li>Canoa mayan sunset tour and cacao meditation ceremony</li>
            <li>International certification and graduation ceremony</li>
            <li>Manual to take into your teaching future</li>
            <li>Sunrise yoga class at the beach</li>
            <li>3 home cooked vegetarian meals</li>
            <li>13 nights accommodation</li>
            <li>Surprise gifts</li>
          </ul>

          <h2 className='mt-8 mb-2 text-lg'>Skill level</h2>
          <ul className='bg-gray-100 p-4 list-disc text-sm pl-8 leading-normal'>
            <li>Beginner</li>
            <li>Intermediate</li>
            <li>Advanced</li>
          </ul>

          <h2 className='mt-8 mb-2 text-lg'>Yoga styles</h2>
          <ul className='bg-gray-100 p-4 list-disc text-sm pl-8 leading-normal'>
            <li>Hatha</li>
            <li>Kundalini</li>
            <li>Integral</li>
            <li>Ashtanga</li>
            <li>Vinyasa</li>
          </ul>

          <h2 className='mt-8 mb-2 text-lg'>Facilities</h2>
          <ul className='bg-gray-100 p-4 list-disc text-sm pl-8 leading-normal grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
            <li>Swimming pool (outdoor)</li>
            <li>Temazcal</li>
            <li>Air-conditioned public areas</li>
            <li>Café</li>
            <li>Dining area</li>
            <li>Environmentally friendly</li>
            <li>Garden</li>
            <li>Kitchen</li>
            <li>Lounge</li>
            <li>Meditation garden</li>
            <li>Multilingual staff</li>
            <li>Picnic area</li>
            <li>free property</li>
            <li>menu request</li>
            <li>Yoga deck</li>
            <li>Yoga shala</li>
            <li>Bicycle rental</li>
            <li>Car rental</li>
            <li>Child care</li>
            <li>Currency exchange</li>
            <li>Free bicycle</li>
            <li>Free parking</li>
            <li>Wi-Fi</li>
            <li>Internet access</li>
            <li>Laundry</li>
            <li>Meeting room</li>
            <li>Tour assistance</li>
            <li>Outdoor shower</li>
          </ul>

          <p className='mt-4 mb-2'>Casa Chakras is a homey and cozy place, with plenty of space for everyone to have their privacy. Trees, flowers and animals such as birds and iguanas are part of the place.
            The cabins are simple and very comfortable, they have a private bathroom and hot water, the morning sunlight enters through the window to start a new day.
            We also have a shared kitchen, and an outdoor bathroom for taking summer showers, designed to be eco-friendly, and feels like a connected community hosting inspired learners.</p>
          <p>In your spare time you can enjoy the crystal pool and rest in the hammocks appreciating the breeze and the calm.</p>
          <p>
            Wi-Fi reaches all cabins.<br />
            An outdoor yoga shala, an indoor yoga shala.<br />
            The students will have the choice of private or shared accommodation.
          </p>

          <h2 className='mb-2 text-lg mt-10'>Program</h2>
          <div className='bg-gray-100 p-4 list-disc text-sm pl-8 leading-relaxed'>
            <ul className=''>
              <li>The day will start early in the morning with the practice of yoga, asanas, meditation, walks, pranayamas, neti, kriyas, and more techniques.</li>
              <li>During the morning after breakfast, the group will study together yoga theory, its origins, and how to put this ancient discipline into practice in our daily experiences.</li>
              <li>The classes will begin with pranayama modulating the vital energy by chakra, intentioning with mudras and mantras, continuing with asanas, kriyas, kramayis and viayamas also by chakra, ending with pratiahara, dhara, dhiana to achieve samadhi.</li>
              <li>There will be free time to read, rest, and a workshop.</li>
              <li>Ending the day with more yoga practice at sunset and guided meditations with bowls and sounds in the spectacular settings of the cenotes and the jungle of Cozumel.</li>
              <li>Daily practice of asanas, pranayama, meditation, and by engaging in discussion, debate, and discourses the aim is to go beyond the theoretical and to embody the multidimensional yoga experience. After graduation students/teachers will be teaching from personal experiences rather than memorized scripts.</li>
            </ul>

            <h2 className='mb-2 text-lg mt-6'>Example schedule</h2>
            <ul className='list-disc text-sm ml-4'>
              <li>08:30 - 09:30 Kundalini tantra Yoga practice, pranayamas, kriyas</li>
              <li>09:30 - 10:30 Breakfast</li>
              <li>11:30 - 13:30 Theory classes, group dynamics</li>
              <li>Lunch and free time</li>
              <li>17:30 - 19:00 Practice kundalini tantra Yoga, meditacion, etc</li>
              <li>19:30 Dinner</li>
            </ul>
            <p className='text-sm italic mt-2'>
              This schedule is subject to change
            </p>
          </div>

          <div className='max-w-max mt-10'>
            <Link href='/contact'>
              <a className='button button-secondary mr-2'>
                Send Inquiry
              </a>
            </Link>
            <a className='button' href='https://www.bookyogaretreats.com/yoga-kundalini-teacher-training-in-cozumel/14-days-200-hour-introduccion-kundalini-yoga-training-on-the-island-of-cozumel#reviews' target='_blank' rel='noopener noreferrer nofollow'>
              Book now
            </a>
          </div>
        </div>

        <h2 className='text-2xl mt-12 mb-2 text-left'>Meet the Teachers:</h2>
        <div className='mb-12 bg-white dark:bg-black p-4'>
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
              <p className='text-4xl border-b border-brand'>Miel Kaprielian</p>
              <p className='text-sm mt-6'>
                Grand Master Yogacharini and facilitator of feminine power Arunima shares her lifestyle, yoga, prana, family tree therapies, biodecoding, massages, and more since 13 years ago, when she began to train in the world of Healthy Arts, Chinese medicine, and Ayurveda. With 2 masters in Integral yoga and Kundalini yoga, she dedicates her life to respectful parenting and gestation, continuing her studies as a midwife after giving birth to her second daughter naturally and in nature.
              </p>
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
              <p className='text-4xl border-b border-brand md:text-right'>Christof Bauer</p>
              <p className='text-sm mt-6'>He came in contact with yoga more than 10 years ago, but really started his journey during his first teacher training in Thailand in 2018. It changed everything. It helped him overcome many personal issues and he has been traveling since, giving back by teaching and learning more about yoga. He focuses a lot on the connection of breath and movement and the benefits on the nervous system. He loves yoga and hopes he can spread this love.</p>
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

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
            <Image
              src='/ttc/alex.jpg'
              alt='Alexis Gabriel Saez'
              className='rounded'
              width={1074}
              height={1074}
              objectFit='cover'
              placeholder="blur"
              blurDataURL='/ttc/alex.jpg'
            />
            <div className='text-2xl'>
              <p className='text-4xl border-b border-brand md:text-left'>Alexis Gabriel Saez</p>
              <p className='text-sm mt-6'>Alexis is a musician, performer, and composer and for 17 years he has dedicated himself to the art of music. He is a multi-instrumentalist (drums, guitar, bass, flute, percussion). He has collaborated with great international musicians throughout his career such as Luis Gasca, Rick Leister, and Marcelo Torres among others. He has worked in weddings, 5-star hotels, cruises, and ashrams.</p>
            </div>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='text-2xl'>
              <p className='text-4xl border-b border-brand md:text-right'>Zitta Ocejo</p>
              <p className='text-sm mt-6'>Yoga and meditation instructor zitta ( Bhairavi Nidrani ) . The path of the search start taking place when she wanted to experience the journey of a sannyasin and disciple living in several ashrams at service to the world . In this journey of 8 years she dedicated in to her own meditation practice while throwing yoga festivals and retreats creating community of many practitioners and techniques of meditation , yoga and martial arts . This journey took her to be part of projects and centers of India, Nepal, Vietnam, Israel, Egypt and Malta by living in different ashrams</p>
            </div>
            <Image
              src='/ttc/zitta.jpg'
              alt='Zitta Ocejo'
              className='rounded'
              width={1074}
              height={1074}
              objectFit='cover'
              placeholder="blur"
              blurDataURL='/ttc/zitta.jpg'
            />
          </div>
        </div>

        <div className='max-w-max my-10 mx-auto'>
          <Link href='/contact'>
            <a className='button button-secondary mr-2'>
              Send Inquiry
            </a>
          </Link>
          <a className='button' href='https://www.bookyogaretreats.com/yoga-kundalini-teacher-training-in-cozumel/14-days-200-hour-introduccion-kundalini-yoga-training-on-the-island-of-cozumel#reviews' target='_blank' rel='noopener noreferrer nofollow'>
            Book now
          </a>
        </div>
        <div className='text-center'>
          <Link href="/contact">
            <a className="link">
              Contact us
            </a>
          </Link>
          {` `}for more information.
        </div>
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
