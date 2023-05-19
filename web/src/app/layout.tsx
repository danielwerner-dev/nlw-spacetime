import {
  Bai_Jamjuree as BaiJamnuree,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = BaiJamnuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjure',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Um cápsula do tempo construida com: NextJS, TailWind e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baijamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
