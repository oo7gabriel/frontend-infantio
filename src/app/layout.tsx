import { Providers } from '@/providers'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import localFont from 'next/font/local'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import { authOptions } from './utils/authOptions'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Infantio',
  description: 'Generated by create next app'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)

  return (
    <html lang='en'>
      <body
        className={`bg-gradient-to-r from-[#e3f1f2] from-15% via-[#ceebd5] via-45% to-[#e9e7d3] to-100% ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  )
}