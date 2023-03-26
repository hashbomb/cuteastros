import Layout from '../components/Layout';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PolygonZkevmTestnet } from "@thirdweb-dev/chains";
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'

const activeChainId = polygon-zkevm-testnet;

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <Layout>
        <ThirdwebProvider activeChain={PolygonZkevmTestnet}>
          <Component {...pageProps} />
        </ThirdwebProvider>
      </Layout>
    )
}

export default MyApp