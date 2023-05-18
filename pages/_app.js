import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Foote from '@/components/Foote'

export default function App({ Component, pageProps }) {
  return <><Navbar />
 <Component {...pageProps} />
 <Foote />
 </>
}
