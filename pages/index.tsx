import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import { useState } from 'react'



const Home: NextPage = () => {

  const [cameraPosition, setCameraPosition] = useState("start");

  return (
    <div>
      <Head>
        <title>Jens | Jurist og teknolog</title>
        <meta name="description" content="Jurist og teknolog. Jobber som seniorrådgiver i Digdir på dagen. Programmerer og spiller gitar om natten." />
        <link rel="icon" href="/jenslogo.ico" />
      </Head>
      <Navbar cameraPosition={cameraPosition} setCameraPosition={setCameraPosition} />
      <Main cameraPosition={cameraPosition} />
    </div>
  )
}

export default Home
