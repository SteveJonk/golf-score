import '@/css/tailwind.css'

import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Golf Score',
  icons: {
    icon: '/static/favicons/favicon.ico',
  },
}

// suppressHydrationWarning is used to suppress the warning about the mismatch between the server and client markup (https://github.com/pacocoursey/next-themes)
// This happens one level deep according to the documentation

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className="h-full bg-white antialiased dark:bg-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  )
}
