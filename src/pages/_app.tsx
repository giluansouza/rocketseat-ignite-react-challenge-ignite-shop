import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import logo from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import { CartProvider } from 'use-shopping-cart'
import NavBar from '../components/NavBar'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      // Connects to our Stripe account (stored in an .env.local file)
      stripe={process.env.STRIPE_PUBLIC_KEY}
      // Redirected here after successful payments (url stored in .env.local file)
      successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
      // Redirected here when you click back on Stripe Checkout (url stored in .env.local file)
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}/?success=false`}
      currency="BRL"
      // Only customers from UK will be able to purchase
      // Having this setting means that we will capture shipping address
      allowedCountries={['BR']}
      // Enables local storage
      shouldPersist={true}
    >
      <Container>
        <Header>
          <Image src={logo} alt="logo" />
          <NavBar />
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
