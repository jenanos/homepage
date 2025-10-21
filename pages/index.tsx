import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Main from '../components/Main';
import Navbar from '../components/Navbar';
import { INITIAL_MINIMAP_STATE } from '../types/minimap';

const Home: NextPage = () => {
  const [minimapState, setMinimapState] = useState(INITIAL_MINIMAP_STATE);

  return (
    <div>
      <Head>
        <title>Jens Andresen Osberg | Jurist og teknolog</title>
        <meta
          name="description"
          content="Jens Andresen Osberg. Jurist og teknolog. Jobber som seniorrådgiver i Digdir på dagen. Spiller gitar og koder om natten."
        />
        <link rel="icon" href="/jenslogo.ico" />
      </Head>
      <Navbar setMinimapState={setMinimapState} />
      <Main minimapState={minimapState} setMinimapState={setMinimapState} />
    </div>
  );
};

export default Home;
