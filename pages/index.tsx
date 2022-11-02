import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import { useState } from 'react'



const Home: NextPage = () => {
  const [minimapClicked, setMinimapClicked] = useState(["start", false, true]);

  return (
    <div>
      <Head>
        <title>Jens Andresen Osberg | Jurist og teknolog</title>
        <meta name="description" content="Jens Andresen Osberg. Jurist og teknolog. Jobber som seniorrådgiver i Digdir på dagen. Spiller gitar og koder om natten." />
        <link rel="icon" href="/jenslogo.ico" />
      </Head>
      <Navbar minimapClicked={minimapClicked} setMinimapClicked={setMinimapClicked} />
      <Main minimapClicked={minimapClicked} setMinimapClicked={setMinimapClicked} />
    </div>
  )
}

export default Home
