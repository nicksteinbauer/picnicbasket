import Nav from './Nav'
import layoutStyles from '../styles/Layout.module.scss'

const Layout = ({children}) => {
  
    return (
        <>
            <Nav />
            <div className={`${layoutStyles.container}`}>
                <main className={layoutStyles.main}>
                    {children}
                </main>
            </div>
        </>
     
    )
}

export default Layout
