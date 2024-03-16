import '@/css/tailwind.css'
import '@fontsource/inter/variable-full.css'

import { ReactNode } from 'react'
import Head from 'next/head'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Golf Score',
  icons: {
    icon: '/static/favicons/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <Head>
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <body className="h-full bg-gray-900 text-white antialiased">{children}</body>
    </html>
  )
}
