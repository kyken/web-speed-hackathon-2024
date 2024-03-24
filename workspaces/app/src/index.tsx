// import './setup';

import { Suspense } from 'react';

import { Container } from './foundation/components/Container';
import { Dialog } from './foundation/components/Dialog';
import { Footer } from './foundation/components/Footer';
import { GlobalStyle } from './foundation/styles/GlobalStyle';
import { Router } from './routes';

export const ClientApp: React.FC = () => {
  return (
    <Suspense>
      <GlobalStyle />
      <Dialog />
      <Container>
        <Router />
        <Footer />
      </Container>
    </Suspense>
  );
};
