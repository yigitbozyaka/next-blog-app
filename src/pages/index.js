import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fadime Nur Gülmez Blog</title>
      </Head>
      <main className={`min-h-screen m-0 p-0 box-border bg-[#FBFAF5] text-[#181A18] dark:bg-[#181A18] dark:text-[#FBFAF5]`}>
        <Layout />
        <Hero />
      </main>
    </>
  )
}
