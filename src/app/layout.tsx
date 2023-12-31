import './globals.css'

import type { Metadata } from 'next'
import { Inter, Ubuntu_Mono} from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ubuntumono = Ubuntu_Mono({ subsets: ['latin'], weight: '400', variable: '--font-ubuntumono' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ubuntumono.variable}`}>
      <body className='bg-blueberry-900'>
        {children}
      </body>
    </html>
  )
}
