import { ReactNode } from 'react';

import Navbar from 'UI/Navbar';

import { LayoutProps } from './layoutTypes';

function BaseLayout({ children }: LayoutProps) {
  console.log({ children });
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default BaseLayout;

export function getLayout(page: ReactNode) {
  return <BaseLayout>{page}</BaseLayout>;
}
