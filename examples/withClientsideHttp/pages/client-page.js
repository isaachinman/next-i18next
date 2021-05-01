import Link from 'next/link'

import { useTranslation } from 'next-i18next'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const ClientPage = () => {
  const { t, ready } = useTranslation('client-page')

  return (
    <>
      <main>
        <Header heading={ready ? t('h1') : ''} title={ready ? t('title') : ''} />
        <Link href='/'>
          <button
            type='button'
          >
            {ready ? t('back-to-home') : ''}
          </button>
        </Link>
      </main>
      <Footer />
    </>
  )
}


export default ClientPage
