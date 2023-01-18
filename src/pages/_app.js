import Layout from '@/components/Layout'
import '@/styles/style.scss'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}
