import { Link } from 'react-scroll';

import brandStyles from '../styles/BrandStyles.module.scss'

const ScrollLink1 = () => {
  
    return (
        <Link href='' to='about' smooth={true} className={`flex-vertical ${brandStyles.brandLink}`}>
            <span>About</span>
        </Link>
    )
  }


export default ScrollLink1