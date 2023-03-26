import Layout from '../components/Layout';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PolygonZkevmTestnet } from "@thirdweb-dev/chains";
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={PolygonZkevmTestnet}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;