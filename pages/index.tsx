import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import { useState } from 'react'



const Home: NextPage = () => {

  const [cameraPosition, setCameraPosition] = useState("start");
  const [showMap, toggleMap] = useState(true);

  return (
    <div>
      <Head>
        <title>Jens | Jurist og teknolog</title>
        <meta name="description" content="Jurist og teknolog. Jobber som seniorrådgiver i Digdir på dagen. Spiller gitar og koder om natten." />
        <link rel="icon" href="/jenslogo.ico" />
      </Head>
      <Navbar setCameraPosition={setCameraPosition} showMap={showMap} toggleMap={toggleMap} />
      <Main cameraPosition={cameraPosition} setCameraPosition={setCameraPosition} showMap={showMap} toggleMap={toggleMap} />
    </div>
  )
}

export default Home
