import '@/css/tailwind.css'
import '@fontsource/inter/variable-full.css'

import { ReactNode } from 'react'
import Head from 'next/head'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page Titloooe',
  icons: {
    icon: '/static/favicons/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <Head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <body className="h-full bg-gray-900 text-white antialiased">{children}</body>
    </html>
  )
}
