import type { Metadata } from 'next'
import AppWrapper from '../components/AppWrapper'
import './globals.css'

export const metadata: Metadata = {}

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
