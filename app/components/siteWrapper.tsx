import React from 'react';

import Background from './Background';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const SiteWrapper = ({children}: Props) => (
  <div className="flex flex-col grow items-center min-h-full">
    <Background />
    <Header />
    {children}
    <Footer />
  </div>
);

export default SiteWrapper;
