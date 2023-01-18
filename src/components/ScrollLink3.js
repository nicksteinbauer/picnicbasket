import { Link } from 'react-scroll';

import brandStyles from '../styles/BrandStyles.module.scss'

const ScrollLink3 = () => {
  
    return (
        <Link href='' to='bev' smooth={true} className={`flex-vertical ${brandStyles.brandLink}`}>
            <span>Beverage Center</span>
        </Link>
    )
  }


export default ScrollLink3