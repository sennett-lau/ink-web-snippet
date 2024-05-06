import type { Metadata } from 'next'
import './globals.css'
import AppWrapper from '../components/AppWrapper'

export const metadata: Metadata = {
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <AppWrapper>{children}</AppWrapper>
    </html>
  )
}
