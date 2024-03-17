import '@/css/tailwind.css'

import { ReactNode } from 'react'
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
      <body className="h-full bg-gray-900 text-white antialiased">{children}</body>
    </html>
  )
}
