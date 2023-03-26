import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <>
        <Head>
            <title>about cuteastros</title>
        </Head>
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='about__content mint__card p-4 rounded-lg w-5/6 md:w-3/5'>
                <h1 className='heading text-xl font-bold'>about cuteastros</h1>
                <p className='body-font mt-4'>cuteastros is a unique collection of cute astronauts, this is just a portfolio project.</p>
                <div>
                    <p className='mt-6 body-font'>made with ❤️ by <a href="https://twitter.com/nishant_py" target="_blank" rel="noopener noreferrer">@nishant_py</a></p>
                </div>
                <div>
                <iframe
    src="https://ipfs.thirdwebcdn.com/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0xb229a96e1e7056223Ce891ae26ee8a2fD0dDD76F&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fmumbai.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%7D"
    width="600px"
    height="600px"
    style="max-width:100%;"
    frameborder="0"
    ></iframe>
                </div>
            </div>
        </div>
    </>
  )
}

export default about