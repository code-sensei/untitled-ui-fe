import 'styles/globals.css'
import navbar from 'styles/navbar.module.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import { MenuIcon } from '../components/icons'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <nav className={navbar.navbar__container}>
        <Image 
          src={'images/Logo.svg'}
          height={32}
          width={142}
          alt={'logo'}
          role={'presentation'}
        />
        <MenuIcon />
      </nav>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
