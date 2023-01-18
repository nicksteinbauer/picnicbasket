import { Link } from 'react-scroll';

import brandStyles from '../styles/BrandStyles.module.scss'

const ScrollLink2 = () => {
  
    return (
        <Link href='' to='tee' smooth={true} className={`flex-vertical ${brandStyles.brandLink}`}>
            <span>T-Shirt Shop</span>
        </Link>
    )
  }


export default ScrollLink2