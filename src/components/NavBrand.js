//import Link from 'next/link'
import Image from 'next/image'
import Link from 'next/link'
import brandStyles from '../styles/BrandStyles.module.scss'
import ScrollLink1 from './ScrollLink1'
import ScrollLink2 from './ScrollLink2'
import ScrollLink3 from './ScrollLink3'

const NavBrand = () => {
    return (
    <nav className={`${brandStyles.nav} always-flex justify`}>
        <Link href='/' className={`flex-vertical ${brandStyles.logo}`}>
            <Image
                src="/PicnicBasketLogo.svg"
                alt="Picnic Basket Logo"
                className={brandStyles.logoImage}
                width={200}
                height={39}
                priority
            />
        </Link>
        <ul className={`flex-sm ${brandStyles.brandNav}`}>
            <li>
                <ScrollLink1 />
            </li>
            <li>
                <ScrollLink2 />
            </li>
            <li>
                <ScrollLink3 />
            </li>
        </ul>
        <div className={`center flex-vertical ${brandStyles.contact}`}>
            <p>Free Put-in-Bay Delivery<br/>(419) 285-7502</p>
        </div>
    </nav>
    )
}

export default NavBrand