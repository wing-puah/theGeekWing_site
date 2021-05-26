import { ReactNode, ReactElement } from 'react';

import Navbar from 'UI/Navbar';

import { LayoutProps } from './layoutTypes';

function BaseLayout({ children }: LayoutProps): ReactElement {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default BaseLayout;

export function getLayout(page: ReactNode): ReactElement {
  return <BaseLayout>{page}</BaseLayout>;
}
