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
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis in urna varius mattis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Etiam hendrerit et nulla eget euismod. Nunc sodales neque a rutrum dapibus. 
                        In venenatis tempus pellentesque. Fusce vel mi urna. In sit amet condimentum ante. 
                        Suspendisse in lacus tristique sapien feugiat accumsan. Aliquam eget varius ipsum, ac lacinia lectus. 
                        Fusce non sem a quam tincidunt blandit. Nam rutrum quam quis tellus vehicula, vitae condimentum ante scelerisque. 
                        Curabitur bibendum ut velit sagittis aliquet.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis in urna varius mattis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Etiam hendrerit et nulla eget euismod. Nunc sodales neque a rutrum dapibus. 
                        In venenatis tempus pellentesque. Fusce vel mi urna. In sit amet condimentum ante. 
                        Suspendisse in lacus tristique sapien feugiat accumsan. Aliquam eget varius ipsum, ac lacinia lectus. 
                        Fusce non sem a quam tincidunt blandit. Nam rutrum quam quis tellus vehicula, vitae condimentum ante scelerisque. 
                        Curabitur bibendum ut velit sagittis aliquet.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis in urna varius mattis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Etiam hendrerit et nulla eget euismod. Nunc sodales neque a rutrum dapibus. 
                        In venenatis tempus pellentesque. Fusce vel mi urna. In sit amet condimentum ante. 
                        Suspendisse in lacus tristique sapien feugiat accumsan. Aliquam eget varius ipsum, ac lacinia lectus. 
                        Fusce non sem a quam tincidunt blandit. Nam rutrum quam quis tellus vehicula, vitae condimentum ante scelerisque. 
                        Curabitur bibendum ut velit sagittis aliquet.</p>
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
