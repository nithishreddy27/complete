import Head from 'next/head'
import { useUser } from '../lib/hooks'
import clientPromise from '../lib/mongodb'
import { Inter } from '@next/font/google'

import { InferGetServerSidePropsType } from 'next'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context: any) {
  try {
    await clientPromise

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps> ) { 
  const user = useUser()
  return (
    <>
      <Head>
        <title>Provast app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-screen h-screen flex justify-center align-middle '>

      <Link href="/login" className='bg-red-300 p-4 mx-5 h-12 my-auto'>LOGIN</Link>
      <Link href="/signup" className='bg-green-300 p-4 mx-5 h-12 my-auto'>SIGN UP</Link>
      </div>
    </>
  )
}
