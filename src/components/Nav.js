//import Link from 'next/link'
import Image from 'next/image'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'

const Nav = () => {
    return (
    <nav className={`${navStyles.nav}`}>
      <ul className={`${navStyles.navUl} always-flex `}>
        <li className={navStyles.firstWhite}></li>
        <li className={navStyles.bh}>
            <a target='_blank' href='https://www.theboathousebarandgrill.com'>
                <Image
                    className={navStyles.logos}
                    src="/BoathousePins-BH.svg"
                    alt="Boathouse Logo"
                    width={44}
                    height={44}
                    priority
                />
            </a>
            <div className={navStyles.submenu}>
                <div className={navStyles.pointer}></div>
                <div className={navStyles.subdiv}>
                    <h3>
                        The Boathouse Bar and Grill
                    </h3>
                    <p>Great Food - Great Bands</p>
                    <a className='button' href='https://www.theboathousebarandgrill.com'>Visit</a>
                </div>
            </div>
        </li>
        <li className={navStyles.cr}>
            <a target='_blank' href='https://www.boathousecartrental.com'>
                <Image
                    className={navStyles.logos}
                    src="/BoathousePins-CR.svg"
                    alt="Boathouse Cart Rental Logo"
                    width={44}
                    height={44}
                    priority
                />
            </a>
            <div className={navStyles.submenu}>
                <div className={navStyles.pointer}></div>
                <div className={navStyles.subdiv}>
                    <h3>
                        The Boathouse Cart Rental
                    </h3>
                    <p>Put in Bay Cart Rentals from Boathouse | Downtown Across the street from the Jet Express</p>
                    <a className='button' href='https://www.boathousecartrental.com'>Visit</a>
                </div>
            </div>
        </li>
        <li className={navStyles.pb}>
            <Link href='/'>
                <Image
                    className={navStyles.logos}
                    src="/BoathousePins-PB.svg"
                    alt="Boathouse Logo"
                    width={44}
                    height={44}
                    priority
                />
            </Link>
            <div className={navStyles.submenu}>
                <div className={navStyles.pointer}></div>
                <div className={navStyles.subdiv}>
                    <h3>
                        The Picnic Basket
                    </h3>
                    <p>You're Here!</p>
                </div>
            </div>
        </li>
        <li className={navStyles.bg}>
            <a target='_blank' href='https://www.theboathousebarandgrill.com'>
                <Image
                    className={navStyles.logos}
                    src="/BoathousePins-BC.svg"
                    alt="Beverage Center Logo"
                    width={44}
                    height={44}
                    priority
                />
            </a>
            <div className={navStyles.submenu}>
                <div className={navStyles.pointer}></div>
                <div className={navStyles.subdiv}>
                    <h3>
                        Biergarten at PIB
                    </h3>
                    <p>German Themed place for Beers and Brats</p>
                    <a className='button' href='https://www.biergartenpib.com'>Visit</a>
                </div>
            </div>
        </li>
        <li className={navStyles.lastWhite}></li>
      </ul>
    </nav>
    )
}

export default Nav