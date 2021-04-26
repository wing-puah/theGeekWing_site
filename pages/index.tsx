import Head from 'next/head';

import { getLayout } from 'layouts/BaseLayout';
import { config } from 'components/home/config';

function Home() {
  return <>{config.intro}</>;
}

Home.getLayout = getLayout;

export default Home;
