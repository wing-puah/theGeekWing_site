import { getLayout } from 'layouts/BaseLayout';
import { config } from 'components/home/config';

function Home() {
  return (
    <>
      {config.intro}
      <div className="p-3">
        <h1>New site coming soon</h1>
      </div>
    </>
  );
}

Home.getLayout = getLayout;

export default Home;
