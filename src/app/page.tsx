'use client'
import HolderVerification from '../components/HolderVerification'
import OrdConnectHookSample from '../components/OrdConnectHookSample'
import SignMessageHookSample from '../components/SignMessageHookSample'
import WalletConnect from '../components/WalletConnect'

export default function Home() {
  return (
    <div className='flex-1 w-full bg-[#1F1F1F] text-white p-12'>
      <p className='text-3xl mb-2'>Snippet for BTC wallet connect w/ Ink holder verification</p>
      <a className='underline' href='https://github.com/sennett-lau/ink-web-snippet' target='_blank'>
        https://github.com/sennett-lau/ink-web-snippet
      </a>
      <hr className='my-4' />

      <p className='text-2xl mb-2'>Installation</p>
      <p>
        The snippet is mainly developed with this package:{' '}
        <a className='font-bold underline' href='https://github.com/ordzaar/ord-connect' target='_blank'>
          @ordzaar/ord-connect
        </a>
      </p>
      <p>It provide all necessary functions of connect wallet and message signing for wallets included:</p>
      <div className='pl-2'>
        <p>- xverse</p>
        <p>- okx</p>
        <p>- leather</p>
        <p>- magic eden</p>
        <p>- unisat</p>
      </div>
      <p>While it also provide integrations with ReactJs, providing useful hooks and context.</p>

      <hr className='my-4' />

      <p className='text-2xl mb-2'>Provider and Context</p>
      <p>Simply wrap the application with </p>
      <p>
        The sample code shows in{' '}
        <a
          className='underline'
          href='https://github.com/sennett-lau/ink-web-snippet/blob/main/src/components/AppWrapper.tsx'
          target='_blank'
        >
          src/components/AppWrapper.tsx
        </a>
      </p>
      <pre className='bg-[#424242] text-[#FDFDFD] p-2 w-fit m-2'>
        <p>{'<OrdConnectProvider initialNetwork={Network.MAINNET}>'}</p>
        <p>&nbsp;&nbsp;{'<App/>'}</p>
        <p>{'</OrdConnectProvider>'}</p>
      </pre>

      <hr className='my-4' />

      <p className='text-2xl mb-2'>Connect Wallet</p>
      <p>
        Simply with the following component, while sample code will be in{' '}
        <a
          className='underline'
          href='https://github.com/sennett-lau/ink-web-snippet/blob/main/src/components/WalletConnect.tsx'
          target='_blank'
        >
          src/components/WalletConnect.tsx
        </a>
      </p>
      <WalletConnect />

      <hr className='my-4' />

      <p className='text-2xl mb-2'>Useful Hooks</p>
      <p>A hook that provide data and function include: address, network, wallet, disconnect and more.</p>
      <pre className='bg-[#424242] text-[#FDFDFD] p-2 w-fit m-2'>
        <p>{"import {useOrdConnect, useSignMessage } from '@ordzaar/ord-connect'"}</p>
        <p>&nbsp;</p>
        <p>{'const { address, disconnectWallet, wallet } = useOrdConnect()'}</p>
        <p>{'const { signMsg } = useSignMessage()'}</p>
      </pre>
      <p className='mt-4'>
        The following shows the function of the useOrdConnect in{' '}
        <a
          className='underline'
          href='https://github.com/sennett-lau/ink-web-snippet/blob/main/src/components/OrdConnectHookSample.tsx'
          target='_blank'
        >
          src/components/OrdConnectHookSample.tsx
        </a>
      </p>
      <OrdConnectHookSample />
      <p className='mt-4'>
        The following shows the function of the useSignMessage in{' '}
        <a
          className='underline'
          href='https://github.com/sennett-lau/ink-web-snippet/blob/main/src/components/SignMessageHookSample.tsx'
          target='_blank'
        >
          src/components/SignMessageHookSample.tsx
        </a>
      </p>
      <SignMessageHookSample />

      <hr className='my-4' />

      <p className='text-2xl mb-2'>Holder verification</p>
      <p>
        For this, Hiro API is implemented:{' '}
        <a className='underline' href='https://www.hiro.so/' target='_blank'>
          link
        </a>
      </p>
      <p>
        While this specific inscription api will be called:{' '}
        <a className='underline' href='https://docs.hiro.so/ordinals/list-of-inscriptions' target='_blank'>
          link
        </a>
      </p>
      <p>We will get all the ordinals of the user address with the inscription number between 66120395 and 66151960,</p>
      <p>
        The api will then return the ordinals user are holding while there are ordinals that not belong to the Ink
        collection,
      </p>
      <p>Thus, we need to check if the inscription id included in the map data I provided.</p>
      <p>
        The map contains all 10K Ink inscription ids{' '}
        <a
          className='underline'
          href='https://github.com/sennett-lau/ink-web-snippet/blob/main/src/data/inscriptionIdToInkIdMap.ts'
          target='_blank'
        >
          link
        </a>
      </p>
      <p className='mt-4'>
        The following shows the flow of the verification process in{' '}
        <a
          className='underline'
          href='https://github.com/sennett-lau/ink-web-snippet/blob/main/src/components/SignMessageHookSample.tsx'
          target='_blank'
        >
          src/components/HolderVerification.tsx
        </a>
      </p>
      <HolderVerification />
    </div>
  )
}
