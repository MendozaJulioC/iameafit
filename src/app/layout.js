import Provider from '../components/Providers/Provider'
//import Header from './components/Header'
//import Footer from './components/Footer'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IAM',

}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className='flex h-full flex-col' suppressHydrationWarning={true}>
        <Provider>
          {/* <Header /> */}
          <Script src='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js'/>
          <main className='grow'>{children}</main>
          {/* <Footer /> */}
        </Provider>
      </body>
    </html>
  )
}