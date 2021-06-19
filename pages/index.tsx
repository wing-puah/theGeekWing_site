import { getLayout } from 'layouts/BaseLayout';
import { config } from 'components/home/config';

import Hero from 'components/home/Hero';

function Home() {
  return (
    <>
      {config.intro}
      <Hero />
    </>
  );
}

Home.getLayout = getLayout;

export default Home;
