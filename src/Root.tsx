import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

import { NhostClient, NhostReactProvider } from '@nhost/react';
import { NhostApolloProvider } from '@nhost/react-apollo';

import ThemeProvider from '@/theme/Provider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const nhost = new NhostClient({
  subdomain: 'filjkngpdsoyrxndnepq',
  region: 'eu-central-1',
});

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <NhostReactProvider nhost={nhost}>
        <NhostApolloProvider nhost={nhost}>
          <RecoilRoot>
            <HelmetProvider>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </HelmetProvider>
          </RecoilRoot>
        </NhostApolloProvider>
      </NhostReactProvider>
    </StrictMode>,
  );
}

export default render;
