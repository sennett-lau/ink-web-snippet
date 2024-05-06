'use client'

import { Network, OrdConnectProvider } from '@ordzaar/ord-connect'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode
}

const AppWrapper = (props: Props) => {
  const { children } = props

  return (
    <OrdConnectProvider initialNetwork={Network.MAINNET}>
      <body className={inter.className}>
        <main className='flex min-h-screen flex-col items-center justify-between bg-dotted'>{children}</main>
      </body>
    </OrdConnectProvider>
  )
}

export default AppWrapper
