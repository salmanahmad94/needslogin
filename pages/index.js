import Head from 'next/head'
import Image from 'next/image'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout';

import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})


//const Home = () => {
export default function Home() {

  const { t } = useTranslation('common');

  //const AuthUser = useAuthUser()

  return (
      <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>{t('welcome')}</h1>
        
        <h3>This page should only be accessible after logging in</h3>
      </div>
        
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Layout>      
  )
}


// Note that this is a higher-order function.
//export const getServerSideProps = withAuthUserTokenSSR()()

//export default withAuthUser()(Home)