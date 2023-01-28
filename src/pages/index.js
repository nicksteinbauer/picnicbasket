import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import TeeImages from '@/components/TeeImages'
import Watercolor from '@/components/Watercolor'
import BevImages from '@/components/BevImages'

import NavBrand from '@/components/NavBrand'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Put-in-Bay Picnic Basket at the Boathouse</title>
        <meta name="description" content="Find great things at the Put-in-Bay Picnic Basket" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ff0000" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />


      </Head>
      <div className={styles.mainBack}></div>

      <div className={`inside-xl ${styles.mainBlur}`}>
          <NavBrand />
          <div>
            <div className={styles.mainContent}>
              <div name='about' className={`flex-md ${styles.about}`}>
                <div className='forty flex-vertical'>
                  <div className={styles.textContent}>
                    <h1 className={styles.h1}>
                      The Picnic Basket - Find Great Things at Put-in-Bay
                    </h1>
                    <div>
                      <p>Information Coming Soon.</p>
                    </div>
                  </div>
                </div>
                <Watercolor />
              </div>
              <div name='tee' className={`flex-md ${styles.teeShirt}`}>
                <div className={`forty flex-vertical ${styles.teePadd}`}>
                  <div className={styles.textContent}>
                    <h2 className={styles.h2}>T-Shirt Shop</h2>
                    <div>
                    <p>Information Coming Soon.</p>
                    </div>
                  </div>
                </div>
                <TeeImages />
              </div>
              <div name='bev' className={`flex-md ${styles.bev}`}>
                <div className='forty flex-vertical'>
                  <div className={styles.textContent}>
                    <h2 className={styles.h2}>Beverage Center</h2>
                    <div>
                    <p>Information Coming Soon.</p>
                    </div>
                  </div>
                </div>
                <BevImages />
              </div>
            </div>
          </div>
        </div>
    </>
    
  )
}
