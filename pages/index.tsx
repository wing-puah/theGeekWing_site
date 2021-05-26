import { getLayout } from 'layouts/BaseLayout';
import { config } from 'components/home/config';
import Hero from 'components/home/Hero';

function Home() {
  return (
    <>
      {config.intro}
      <div className="p-3">
        <Hero />
        <h1>New site coming soon</h1>
      </div>
    </>
  );
}

Home.getLayout = getLayout;

export default Home;
