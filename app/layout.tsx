import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import Head from 'next/head'

const NotoKufiArabic = Noto_Kufi_Arabic({
     subsets: ['arabic'] 
    })

export const metadata: Metadata = {
  title: 'لؤلؤة الشرق | لتأجير المعدات الهندسية',
  description: 'المعدات الهندسية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir='rtl'>
      <body className={NotoKufiArabic.className}>
        <div className='xl:max-w-[1600px] bg-black my-0 mx-auto dir-rtl'>
          <Navbar />
        {children}
        </div>
        </body>
    </html>
  )
}
